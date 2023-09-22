'use client'
import Link from "next/link";
import styled from "styled-components";
import { color } from "../Theme"

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
        display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
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
export const UlList = styled.ul`
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

export const LiItems = styled.li`
    color: ${color.Black};
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    letter-spacing:0.15px;
    padding-left: 65px;
    cursor: pointer;

    @media (max-width: 1200px) {
        padding-left: calc(1vw + 25px);
    }
    @media (max-width: 1150px) {
        padding-left: calc(1vw + 16px);
    }
    @media (max-width: 800px) {
        padding-left: calc(1vw + 8px);
    }
    @media (max-width: 768px) {
        font-size: 25px;
        color: ${color.White};
        margin-bottom: 20px;
    }
    @media (max-width: 640px) {
        font-size: 25px;
        color: ${color.White};
    }
`


export const StyledLink = styled(Link)`
    color: ${color.Black};
    text-decoration: none;
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
