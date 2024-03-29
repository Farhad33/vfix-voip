'use client'
import { useState } from 'react';
import { TfiMenu, TfiClose } from "react-icons/tfi";
import { Data } from '../Data';
import { Logo, NavContainer, NavLinks, NavList, DropdownItem, MenuButton, LoginButton, MenuTitle } from '../navbar/NavbarStyle';
import PricingDropdown from './PricingDropdown';
import ServicesDropDown from './ServicesDropdown';
import { useRouter, usePathname } from 'next/navigation'

const menuLinks = {
    '': 'Home',
    'whyvfix': 'Why Vfix',
    'services': 'Services',
    'pricing': 'Princing & FAQs',
    'download': 'Downloads',
    'blog': 'Blog',
}
export default function Navbar(props) {
    const [hamburgerMenu, setHamburgerMenu] = useState(false)
    const [isPricingDropdownOpen, setIsPricingDropdownOpen] = useState(false)
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
    const { push } = useRouter()
    const pathname = usePathname()
    const path = pathname.split('/')[1]

    const toggleHamburgerMenu = () => {
        setHamburgerMenu(!hamburgerMenu)
    }

    const handleMenuClick = (dropdownOption) => {
        if (dropdownOption === 'services') {
            setIsServicesDropdownOpen(!isServicesDropdownOpen)
            setIsPricingDropdownOpen(false)
        } else if (dropdownOption === 'pricing') {
            setIsServicesDropdownOpen(false)
            setIsPricingDropdownOpen(!isPricingDropdownOpen)
        } else if (dropdownOption === 'services-sub-dropdown' || dropdownOption === 'pricing-sub-dropdown') {
            setIsServicesDropdownOpen(false)
            setIsPricingDropdownOpen(false)
            setHamburgerMenu(false)
        } else {
            setIsServicesDropdownOpen(false)
            setIsPricingDropdownOpen(false)
            setHamburgerMenu(false)
        }
    }

    return (
        <NavContainer>
            <Logo
                src={Data.navbar.img}
                alt={Data.navbar.alt}
                width={140}
                height={40}
                onClick={() => { push('/') }}
            />
            <MenuButton onClick={toggleHamburgerMenu}>
                {hamburgerMenu ? <TfiClose /> : <TfiMenu />}
            </MenuButton>
            <NavLinks $isOpen={hamburgerMenu}>
                <NavList>
                    {Data.navbar.menu.map((item, index) => (
                        <DropdownItem key={index}>
                            {item.dropdown && item.title === 'Princing & FAQs' ? (
                                <PricingDropdown
                                    item={item} 
                                    selectedMenu={menuLinks[path] === item.title}
                                    isPricingDropdownOpen={isPricingDropdownOpen}
                                    handleMenuClick={handleMenuClick}
                                />
                            ) : item.dropdown && item.title === 'Services' ? (
                                <ServicesDropDown 
                                    item={item} 
                                    selectedMenu={menuLinks[path] === item.title}
                                    isServicesDropdownOpen={isServicesDropdownOpen}
                                    handleMenuClick={handleMenuClick}
                                />
                            )
                            : (
                                <MenuTitle
                                    onClick={() => { 
                                        push(item.route)
                                        handleMenuClick()
                                    }}
                                    $selectedMenu={menuLinks[path] === item.title}
                                >
                                    {item.title}
                                </MenuTitle>
                            )}
                        </DropdownItem>
                    ))}
                    <DropdownItem>
                        <LoginButton 
                            onClick={() => { 
                                push(Data.navbar.login)
                                handleMenuClick()
                            }}
                        >
                            Login
                        </LoginButton>
                    </DropdownItem>
                </NavList>
            </NavLinks>
        </NavContainer>
    );
}
