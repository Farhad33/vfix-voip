'use client'
import { useState } from 'react';
import Image from 'next/image'
import { TfiMenu, TfiClose } from "react-icons/tfi";
import { Data } from '../Data';
import { Button } from '../MainStyle';
import { NavContainer, NavLinks, UlList, LiItems, StyledLink, Container, SpanLinks, MenuButton, SpanButton, SubLinkIcon, Ullink, UlContainer } from '../navbar/NavbarStyle';
import Dropdown from './Dropdown'




export default function Navbar() {
    const [hamburgerMenu, setHamburgerMenu] = useState(false);

    const toggleHamburgerMenu = () => {
        setHamburgerMenu(!hamburgerMenu);
    };

    return (
        <Container>
            <NavContainer>
                <Image
                    src={Data.navbar.img}
                    alt={Data.navbar.alt}
                    width={140}
                    height={40}
                />
                <MenuButton onClick={toggleHamburgerMenu}>
                    {hamburgerMenu ? <TfiClose /> : <TfiMenu />}
                </MenuButton>
                <NavLinks $hamburgerMenu={hamburgerMenu}>
                    <UlList>
                        {Data.navbar.menu.map((item, index) => (
                            <LiItems key={index}>
                                {item.dropdown ? (
                                    <Dropdown item={item} />
                                ) : (
                                    <StyledLink href={item.route}>
                                        <SpanLinks>{item.title}</SpanLinks>
                                    </StyledLink>
                                )}
                            </LiItems>
                        ))}
                        <LiItems>
                            <StyledLink href={Data.navbar.login}>
                                <Button><SpanButton>Login</SpanButton></Button>
                            </StyledLink>
                        </LiItems>
                    </UlList>
                </NavLinks>
            </NavContainer>
        </Container>
    );
}
