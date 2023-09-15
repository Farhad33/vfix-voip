'use client'
import { Data } from '../Data';
import {Button} from '../MainStyle'
import {NavContainer, NavLinks, UlList, LiItems, StyledLink, Container, SpanLinks, MenuButton, SpanButton} from '../navbar/NavbarStyle'
import Image from 'next/image'
import { TfiMenu, TfiClose } from "react-icons/tfi";
import { useState } from 'react';

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    

    const toggleMenu = () => {
        console.log('toggleMenu==>', );
        setIsOpen(!isOpen)
    }
    return (
        <Container>
            <NavContainer>
                <Image
                src={Data.navbar.img}
                alt={Data.navbar.alt}
                width={140}
                height={40}
                />
                <MenuButton onClick={toggleMenu}>
                    {isOpen ? <TfiClose /> : <TfiMenu />}
                </MenuButton>
                <NavLinks isOpen = {isOpen}>
                    <UlList>
                        {
                            Data.navbar.menu.map((items, index) =>(
                                <LiItems key={index}>
                                    <StyledLink href={Data.navbar.links[index]}>
                                        <SpanLinks>{items}</SpanLinks>
                                    </StyledLink>
                                </LiItems>
                            ))
                        }
                        <LiItems>
                            <StyledLink href={Data.navbar.login}><Button><SpanButton>Login</SpanButton></Button></StyledLink>
                        </LiItems>
                    </UlList>
                </NavLinks>
            </NavContainer>
        </Container>
    )
}
