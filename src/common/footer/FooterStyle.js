'use client'
import styled from "styled-components"
import Image from "next/image"
import { color } from '../Theme'


export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, ${color.Green200} 0%, ${color.Blue200} 100%);
    border-radius: 75px 75px 0 0 ;
    /* width: 100%; */
    color: ${color.White};
    padding: calc(2vw + 5px);
`

export const FooterTop = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items:flex-start;
    gap: calc(2vw + 5px);
    /* column-gap: 150px; */
    @media (max-width: 700px) {
        flex-wrap: wrap;
        gap: calc(2vw + 15px);
    }
`

export const FooterLeftSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const FooterLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ImagStyle = styled(Image)`
    width: calc(1vw + 180px);
    height: auto;
    margin-top: 15px;
`
export const FooterLogoContent = styled.div`
`
export const Address = styled.div`
    margin: 30px 0;
`

export const BackgroundImage = styled.div`
    background:linear-gradient(180deg, ${color.Green200} 0%,${color.Blue100} 100%);
    border-radius: 50%; 
    width: 30px;
    height: 30px; 
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
export const FollowUs = styled.div`
    padding-bottom: 15px;
    
`

export const FollowUsTitle = styled.div`
    margin-bottom: 15px;
    `

export const FollowUsImages = styled.div`
    display: flex;
    gap: 25px;
    @media (max-width: 870px) {
        flex-wrap: wrap;
    }
`

export const MobileApp = styled.div`
    
    
`

export const MobileTitle = styled.div`
    padding-bottom: 15px;
`

export const MobileImage = styled.div`
    display: flex;
    gap: 25px;
`


export const FooterRightSide = styled.div`
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: calc(2vw + 15px);

`
export const ListContainer = styled.div`
    margin: 10px 0;
    h3 {
        margin-bottom: 15px;
    }
`
export const ListUl = styled.ul`
    list-style: none;
    padding-bottom: calc(1vw + -2px);
`

export const ListLi = styled.li`
    cursor: pointer;
`

export const FooterBottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 10px 0;
    gap: calc(1vw + 10px);
`