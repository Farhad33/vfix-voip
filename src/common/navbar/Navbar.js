import Link from 'next/link';
import {Container, Button} from '../MainStyle'
import {NavContainer, NavLinks, UL, LI,StyledLink} from '../navbar/NavbarStyle'
import Image from 'next/image'
import logovfix from '../photos/vfixlogo.png'

export default function Navbar() {

    
    return (
        <Container>
            <NavContainer>
                <Image
                src={logovfix}
                alt='Vfix logo'
                width={140}
                />
                <NavLinks>
                    <UL >
                        <LI>
                            <StyledLink href='/'>Home</StyledLink>
                        </LI>
                        <LI>
                            <StyledLink href='/whyvfix'>Why Vfix</StyledLink>
                        </LI>
                        <LI>
                            <StyledLink href='/servic'>Services</StyledLink>
                        </LI>
                        <LI>
                            <StyledLink href='/pricing'>Pricing & FAQs</StyledLink>
                        </LI>
                        <LI>
                            <StyledLink href='/company'>Company</StyledLink>
                        </LI>
                        <LI>
                            <StyledLink href='/down'>Downloads</StyledLink>
                        </LI>
                        <LI>
                            <StyledLink href='/login'><Button>Login</Button></StyledLink>
                        </LI>
                    </UL>
                </NavLinks>
            </NavContainer>
        </Container>
    )
}
