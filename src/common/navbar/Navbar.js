'use client'
import { useState } from 'react';
import { TfiMenu, TfiClose } from "react-icons/tfi";
import { Data } from '../Data';
import { Button } from '../MainStyle';
import { Logo, NavContainer, NavLinks, NavList, DropdownItem, StyledLink, Container, SpanLinks, MenuButton, SpanButton } from '../navbar/NavbarStyle';
import PricingDropdown from './PricingDropdown';
import ServicesDropDown from './ServicesDropdown';
import { useRouter } from 'next/navigation';


export default function Navbar() {
    const [hamburgerMenu, setHamburgerMenu] = useState(false);
    const { push } = useRouter();

    const toggleHamburgerMenu = () => {
        setHamburgerMenu(!hamburgerMenu);
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
                            {item.dropdown && item.title === 'Princing & FAQs ˅' ? (
                                <PricingDropdown item={item} />
                            ) : item.dropdown && item.title === 'Services' ? (
                                <ServicesDropDown item={item} />
                            )
                            : (
                                <StyledLink href={item.route}>
                                    <SpanLinks>{item.title}</SpanLinks>
                                </StyledLink>
                            )}
                        </DropdownItem>
                    ))}
                    <DropdownItem>
                        <StyledLink href={Data.navbar.login}>
                            <Button><SpanButton>Login</SpanButton></Button>
                        </StyledLink>
                    </DropdownItem>
                </NavList>
            </NavLinks>
        </NavContainer>
    );
}
