'use client'
import { useState } from 'react'
import styled, { css } from 'styled-components'
import { color } from "../Theme"
import Link from "next/link"
import Image from "next/image"
import SubDropDown from './ServicesSubDropdown'


export default function PricingDropdown({ item, $selectedMenu }) {
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
            <DropdownList $isDropdownOpen={isDropdownOpen} >
                {item.dropdown.map((subItem, subIndex) => (
                    <PricingDropdownItem key={subIndex}>
                        <StyledLink 
                            href={subItem.route} 
                            onClick={() => setIsDropdownOpen(false)}
                        >
                            <SubLinkIcon 
                                width={50} 
                                height={50} 
                                src={subItem.icon} 
                                alt={subItem.title} 
                            />
                            <SpanLinks>{subItem.title}</SpanLinks>
                        </StyledLink>
                        {subItem.dropdown && <SubDropDown items={subItem.dropdown} /> }
                    </PricingDropdownItem>
                ))}
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
        align-self: center;
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
export const StyledLink = styled(Link)`
    color: ${color.Black};
    text-decoration: none;
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
export const SubLinkIcon = styled(Image)`
`
export const DropdownList = styled.ul`
    display: ${({$isDropdownOpen}) => $isDropdownOpen ? 'flex' : 'none'};
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
        display: ${({$isDropdownOpen}) => $isDropdownOpen ? 'block' : 'none'};
        position: relative;
        /* background: linear-gradient(to bottom, ${color.Green50}, ${color.Blue200}); */
        box-shadow: unset;
        background: #00000000;
        gap: 0;
        left: 5px;
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
export const DropdownContainer = styled.div`
    display: flex;
    justify-content: center;
`