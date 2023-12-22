'use client'
import { useState } from 'react'
import styled, { css } from 'styled-components'
import { color } from "../Theme"
import Link from "next/link"
import ServicesSubDropDown from './ServicesSubDropdown';
import ServicesItConsulting from './ServicesITConsultingDropdown'


export default function ServicesDropdown({ item, $selectedMenu }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const menuTitle = isDropdownOpen ? item.title + ' ˄' : item.title + ' ˅'

    return <>
        <StyledLink
            href={item.route}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
        >
            <SpanLinks $selectedMenu={$selectedMenu}>{menuTitle}</SpanLinks>
        </StyledLink>
        <DropdownContainer>
            <DropdownList $isDropdownOpen={isDropdownOpen}>
                {item.dropdown.map((subItem, subIndex) => (
                    <ServicesDropdownItem key={subIndex}>
                        <h5>{subItem.title}</h5>
                        {subItem.dropdown && <ServicesSubDropDown items={subItem.dropdown} />}
                    </ServicesDropdownItem>
                ))}
                <ServicesItConsulting />
            </DropdownList>
        </DropdownContainer>
    </>
}

export const DropdownItem = styled.li`
    color: ${color.White};
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
export const ServicesDropdownItem = styled(DropdownItem)`
     a {
        color: black;
        text-decoration: none;
        @media (max-width: 768px) {
            color: ${color.White};
        }
        span {
            background-image: linear-gradient(to right, ${color.Green200}, ${color.Blue200});
            background-clip: text;
            -webkit-background-clip: text; 
            color: transparent;
        }
    }
    h5 {
        text-align: center;
        margin-bottom: 20px;
        background-image: linear-gradient(to right, ${color.Green200}, ${color.Blue200});
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        @media (max-width: 768px) {
            color: ${color.White};
        }
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
`
const selectedMenuCSS = css`
    background-image: linear-gradient(to right, ${color.Green200}, ${color.Blue200});
    background-clip: text;
    -webkit-background-clip: text; 
    color: transparent;
`
export const SpanLinks = styled.span`
    ${({$selectedMenu}) => ($selectedMenu ? selectedMenuCSS : `color: ${color.Black};`)}
    &:hover {
        background-image: linear-gradient(to right, ${color.Green200}, ${color.Blue200});
        background-clip: text;
        -webkit-background-clip: text; 
        color: transparent; 
    }
    
    @media (max-width: 768px) {
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
export const SubDropDownList = styled.ul`
    list-style: none;
`
export const DropdownContainer = styled.div`
    display: flex;
    justify-content: center;
`
export const DropdownList = styled.ul`
    display: ${({$isDropdownOpen}) => $isDropdownOpen ? 'flex' : 'none'};
    list-style: none;
    justify-content: center;
    align-items: start;
    position: absolute;
    background: ${color.White};
    box-shadow: 0px 6px 30px 5px ${color.Blue300};
    gap: 50px;
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
        background: #00000000;
        box-shadow: unset;
    }
    li {
        padding: calc(0.5vw + 8px) 0;
        align-self: flex-start;
    }
    span {
        margin-top: 10px;
        /* font-weight: 700; */
    }
`