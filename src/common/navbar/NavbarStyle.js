'use client'
import styled from "styled-components";
// import { Theme } from "../Theme";


export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
 `
// export const Logo = styled.img`
//     width: 100px;
//     height: 100px;
// `

export const NavLinks = styled.div`
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
`
export const UL = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    `

export const LI = styled.li`
    margin-left: 40px;
    color: #000000;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    letter-spacing:0.15px;
    /* &:hover {
        background-image: linear-gradient(to right, #00D59C, #009CD5);
         background-clip: text;
        -webkit-background-clip: text; 
        color: transparent; 
    } */
`
// export const Login = styled.div`

// `


export const StyledLink = styled.a`
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


