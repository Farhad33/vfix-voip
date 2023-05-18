import styled from 'styled-components'
import vfixLogo from '../assets/VFix-logo-white.svg'

export default function Header() {
    return (
        <Container>
            <Nav>
                <Items>
                    <Item>PRODUCT</Item>
                    <Item><a href='/pricing'>PRICING</a></Item>
                    <Item>ABOUT</Item>
                    <Item>SUPPORT</Item>
                    <Item>PORTAL LOGIN</Item>
                    <Item>DOWNLOADS</Item>
                </Items>
                <Logo src={vfixLogo} />
            </Nav>

        </Container>
    )
}

const Container = styled.header`
    display: flex;
    /* position: absolute;
    top: 0; */
`
const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 50px;
    @media (max-width: 930px) {
        flex-direction: column-reverse;
        margin: 10px;
    }
`
const Items = styled.ul`
    display: flex;
    `
const Item = styled.li`
    margin-right: 20px;
    list-style-type: none;
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 16px;
    line-height: 24px;
    color: #00AEEF;
    -webkit-text-fill-color: #00AEEF; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 0.8px;
    -webkit-text-stroke-color: white;
`
const Logo = styled.img`
    height: 100px;
`