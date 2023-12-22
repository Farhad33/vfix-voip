'use client'
import { useState, useRef } from 'react';
import { TfiMenu, TfiClose } from "react-icons/tfi";
import { Data } from '../Data';
import { Logo, NavContainer, NavLinks, NavList, DropdownItem, StyledLink, SpanLinks, MenuButton, LoginButton } from '../navbar/NavbarStyle';
import PricingDropdown from './PricingDropdown';
import ServicesDropDown from './ServicesDropdown';
import { useRouter, usePathname } from 'next/navigation'

const menuLinks = {
    '': 'Home',
    'whyvfix': 'Why Vfix',
    'services': 'Services',
    'pricing': 'Princing & FAQs',
    'download': 'Downloads',
}
export default function Navbar(props) {
    const [hamburgerMenu, setHamburgerMenu] = useState(false)
    const { push } = useRouter()
    const pathname = usePathname()
    const path = pathname.split('/')[1]



    const toggleHamburgerMenu = () => {
        setHamburgerMenu(!hamburgerMenu)
    };

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
                                <PricingDropdown item={item} $selectedMenu={menuLinks[path] === item.title}/>
                            ) : item.dropdown && item.title === 'Services' ? (
                                <ServicesDropDown item={item} $selectedMenu={menuLinks[path] === item.title}/>
                            )
                            : (
                                <StyledLink href={item.route} $selectedMenu={menuLinks[path] === item.title}>
                                    <SpanLinks>{item.title}</SpanLinks>
                                </StyledLink>
                            )}
                        </DropdownItem>
                    ))}
                    <DropdownItem>
                        <LoginButton onClick={() => { push(Data.navbar.login) }}>Login</LoginButton>
                    </DropdownItem>
                </NavList>
            </NavLinks>
        </NavContainer>
    );
}
