import Link from 'next/link';
import {Container, Button} from '../MainStyle'
import {NavContainer, NavLinks, Ul, Li,StyledLink} from '../navbar/NavbarStyle'
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
                    <Ul>
                        <Li>
                            <StyledLink href='/'>Home</StyledLink>
                        </Li>
                        <Li>
                            <StyledLink href='/whyvfix'>Why Vfix</StyledLink>
                        </Li>
                        <Li>
                            <StyledLink href='/servic'>Services</StyledLink>
                        </Li>
                        <Li>
                            <StyledLink href='/pricing'>Pricing & FAQs</StyledLink>
                        </Li>
                        <Li>
                            <StyledLink href='/company'>Company</StyledLink>
                        </Li>
                        <Li>
                            <StyledLink href='/down'>Downloads</StyledLink>
                        </Li>
                        <Li>
                            <StyledLink href='/login'><Button>Login</Button></StyledLink>
                        </Li>
                    </Ul>
                </NavLinks>
            </NavContainer>
        </Container>
    )
}
