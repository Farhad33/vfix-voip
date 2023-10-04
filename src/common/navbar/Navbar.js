'use client'
import { Data } from '../Data';
import { Button } from '../MainStyle';
import { NavContainer, NavLinks, UlList, LiItems, StyledLink, Container, SpanLinks, MenuButton, SpanButton, SubLinkIcon, Ullink, UlContainer } from '../navbar/NavbarStyle';
import Image from 'next/image'
import { TfiMenu, TfiClose } from "react-icons/tfi";
import { useState } from 'react';




export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubLinksOpen, setIsSubLinksOpen] = useState(false); 

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleSubLinks = () => {
        setIsSubLinksOpen(!isSubLinksOpen);
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
                <MenuButton onClick={toggleMenu}>
                    {isOpen ? <TfiClose /> : <TfiMenu />}
                </MenuButton>
                <NavLinks $isOpen={isOpen}>
                    <UlList>
                        {Data.navbar.menu.map((item, index) => (
                            <LiItems key={index}>
                                {item.subLink ? (
                                    <>
                                        <StyledLink
                                            href={item.link}
                                            onClick={toggleSubLinks} 
                                        >
                                            <SpanLinks>{item.title}</SpanLinks>
                                        </StyledLink>
                                        <UlContainer>
                                            <Ullink style={{ display: isSubLinksOpen ? 'flex' : 'none' }}>
                                                {item.subLink.map((subItem, subIndex) => (
                                                    <LiItems key={subIndex}>
                                                        <StyledLink href={subItem.subLink}>
                                                            <SubLinkIcon width={50} height={50} src={subItem.icon} alt={subItem.subTitle} />
                                                            <SpanLinks>{subItem.subTitle}</SpanLinks>
                                                        </StyledLink>
                                                    </LiItems>
                                                ))}
                                            </Ullink>
                                        </UlContainer>
                                    </>
                                ) : (
                                    <StyledLink href={item.link}>
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
