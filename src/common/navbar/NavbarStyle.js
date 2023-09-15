'use client'
import Link from "next/link";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding: 0 5%;
`

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 25px;
`

export const NavLinks = styled.div`
    @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: absolute;
    top: 5%;
    left: 0;
    width: 90%;
    padding: 20px;
    z-index: 1;
    background:  linear-gradient(to bottom, #00D59C, #009CD5);
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
    right: 70px;
    z-index: 2; 
    }
`
export const UlList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    @media (max-width: 640px) {
        flex-direction: column;
    }
`

export const LiItems = styled.li`
    margin-left: 40px;
    color: #000000;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    letter-spacing:0.15px;
    @media (max-width: 640px) {
        padding: 15px 0;
        font-size: 25px;
        color: #FFFFFF;
    }
`


export const StyledLink = styled(Link)`
    color: #000000;
    text-decoration: none;
    &:hover {
        background-image: linear-gradient(to right, #00D59C, #009CD5);
        background-clip: text;
        -webkit-background-clip: text; 
        color: transparent; 
    }
    &:active {
        background-image: linear-gradient(to right, #00D59C, #009CD5);
        background-clip: text;
        -webkit-background-clip: text; 
        color: transparent; 
    }
`;

export const SpanLinks = styled.span`
    padding: 0 18px;
    
    @media  (max-width: 1200px) {
        padding:0 5px ;
    }
    @media  (max-width: 768px) {
        padding:0 0 ; 
    }
    @media (max-width: 640px) {
        padding: 5px 0;
        font-size: 18px;
        color: #FFFFFF;
    }
`
export const SpanButton = styled.span`
  @media (max-width: 640px) {
        font-size: 16px;
        padding: 0 30px;
    }
`
