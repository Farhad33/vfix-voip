'use client'
import Link from "next/link";
import styled from "styled-components";
import { color } from "../Theme"
import Image from "next/image";
import { Button } from "../MainStyle";


export const Container = styled.div`
    width: 100%;
    padding: 0 5%;
`

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 25px;
    @media (max-width: 1000px) {
        flex-direction: column;
    }
    @media (max-width: 768px) {
        flex-direction: row;
    }
`

export const NavLinks = styled.div`    
    @media (max-width: 768px) {
        display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        padding: 20px;
        z-index: 1;
        background:  linear-gradient(to bottom, ${color.Green200}, ${color.Blue200});
    }
`

export const MenuButton = styled.button`
    display: none;
    @media (max-width: 768px) {
        display: block;
        background-color: transparent;
        border: none;
        cursor: pointer;
        font-size: 24px;
        position: absolute;
        top: 20px;
        right: 60px;
        z-index: 2; 
    }
`

export const DropdownContainer = styled.div`
    display: flex;
    justify-content: center;

`
export const SubLinkIcon = styled(Image)`
`

export const NavList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    @media (max-width: 640px) {
        flex-direction: column;
    }
`

export const DropdownItem = styled.li`
    color: ${color.Black};
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    letter-spacing:0.15px;
    padding-left: 65px;
    cursor: pointer;
   
    @media (max-width: 1310px) {
        padding-left:calc(0.5vw + 45px);
    }
    @media (max-width: 1200px) {
        padding-left: calc(1vw + 25px);
    }
    @media (max-width: 1150px) {
        padding-left: calc(1vw + 16px);
    }
    @media (max-width: 840px) {
        padding-left: calc(1vw + 8px);
    }
    @media (max-width: 768px) {
        font-size: 25px;
        color: ${color.White};
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @media (max-width: 640px) {
        font-size: 25px;
        color: ${color.White};
    }
`
export const PricingDropdownItem = styled(DropdownItem)`
     a {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
export const ServicesDropdownItem = styled(DropdownItem)`
  
     a {
        text-decoration: none;
        color: ${color.Black};
        span {
            background-image: linear-gradient(to right, ${color.Green200}, ${color.Blue200});
            background-clip: text;
            -webkit-background-clip: text; 
            color: transparent;
        }
    }
`


 export const DropdownList = styled.ul`
    display: ${(props) => props.isDropdownOpen ? 'flex' : 'none'};
    list-style: none;
    justify-content: center;
    align-items: center;
    position: absolute;
    background: ${color.White};
    box-shadow: 0px 6px 30px 5px ${color.Blue300};
    gap: 10px;
    margin-top: 15px;
    padding: 20px;
    z-index: 1;
    @media (max-width: 1000px) {
        left: 5px;

    }
    @media (max-width: 768px) {
        position: relative;
        flex-direction: column;
        background: linear-gradient(to bottom, ${color.Green50}, ${color.Blue200});
        gap: 0;
        left: 5px;
    }
    li {
        padding: calc(0.5vw + 8px) 0;
        align-self: flex-start;
    }
    span {
        margin-top: 10px;
        font-weight: 700;
    }
   
 `

export const StyledLink = styled(Link)`
    color: ${color.Black};
    text-decoration: none;
    span {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    &:hover {
        background-image: linear-gradient(to right, ${color.Green200}, ${color.Blue200});
        background-clip: text;
        -webkit-background-clip: text; 
        color: transparent; 
    }
    &:active {
        background-image: linear-gradient(to right, ${color.Green200}, ${color.Blue200});
        background-clip: text;
        -webkit-background-clip: text; 
        color: transparent; 
    }
`;

export const SpanLinks = styled.span`

    &:hover {
        background-image: linear-gradient(to right, ${color.Green200}, ${color.Blue200});
        background-clip: text;
        -webkit-background-clip: text; 
        color: transparent; 
    }
    
    @media  (max-width: 768px) {
        padding:10px 0 ; 
        font-size: 18px;
        color: ${color.White};
    }
    @media (max-width: 640px) {
        padding: 5px 0;
        font-size: 18px;
        color: ${color.White};
    }
`
export const SpanButton = styled.span`
  @media (max-width: 640px) {
        font-size: 16px;
        padding: 0 30px;
    }
`
export const SubDropDownContainer = styled.div``
export const SubDropDownList = styled.ul`
    list-style: none;
`
export const SubDropDownLink = styled.li`

`
export const SubDropDownRoute = styled.a`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 12px;
    &:hover {
        background-image: linear-gradient(to right, ${color.Green200}, ${color.Blue200});
        background-clip: text;
        -webkit-background-clip: text; 
        color: transparent; 
    }
`
export const SubDropDownIcon = styled(Image)`
    margin-right: 10px;
`

export const ItConsultingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ItConsultingTitle = styled.span`
  
`
export const ItConsultingImage = styled(Image)`
    margin: 20px 0 ;
`
export const ItConsultingParagraph = styled.p`
    width: 190px;
    font-size: 11px;
    padding-bottom: calc(0.5vw + 5px);
`
export const ItConsultingButton = styled(Button)`
    font-size: calc(0.5vw + 5px);
    height: 30px;
    padding: 0 calc(0.5vw + 2px);
`

export const RoutConsulting = styled.a`
    background-image: linear-gradient(to right, ${color.Green200}, ${color.Blue200});
    background-clip: text;
    -webkit-background-clip: text; 
    color: transparent; 
    text-decoration: none;
`

export const ButtonConsultingRoute = styled.a`
    text-decoration: none;
    color: ${color.White};
`