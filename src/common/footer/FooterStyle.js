'use client'
import styled from "styled-components"
import Image from "next/image"



export const ContainerFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, #00D59C 0%, #009CD5 100%);
    border-radius: 130px 130px 0 0 ;
    width: 100%;
    color: #ffffff;
`

export const FooreContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items:flex-start;
    column-gap: 150px;
    padding-top:50px;
    @media (max-width: 1000px) {
        column-gap: calc(2vw + 5px);
    }
`

export const FooterLeftSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
`
export const FooterLogo = styled.div`

`
export const ImagStyle = styled(Image)`
    @media (max-width: 870px) {
        padding: 0 20px;
    }
`
export const FooterLogoContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 50px;
`
export const Address = styled.p`
    margin: 30px 0;
`

export const BackgroundImage = styled.div`
    background:linear-gradient(180deg, #01D0A2 0%, #009CD5 100%);
    border-radius: 50%; 
    width: 30px;
    height: 30px; 
    display: flex;
    justify-content: center;
    align-items: center;
  
`
export const FollowUs = styled.div`
    padding-bottom: 15px;
    
`

export const FollowUsTitle = styled.p`
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

export const MobileTitle = styled.p`
    padding-bottom: 15px;
`

export const MobileImage = styled.div`
    display: flex;
    gap: 25px;
`


export const FooterRightSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 100px;
    width: 70%;
    @media (max-width: 870px) {
        gap: calc(2vw + 15px);
    }
    @media (max-width: 600px) {
        width: 60%;
        gap: calc(2vw + 10px);
    }

`
export const ListContainer = styled.div`
`
export const ListColumn = styled.div`
`
export const ListTitle = styled.h3`
    padding-bottom: calc(1vw + -2px);
`

export const ListUl = styled.ul`
    list-style: none;
    padding-bottom: calc(1vw + -2px);
`

export const ListLi = styled.li``

export const FooterEndContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: calc(1vw + 2px);
`

export const CopyRight = styled.span`
    display: flex;
    justify-content: center;
    width: 30%;
`

export const Privecy = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    width: 70%;
`
export const PrivecyTag = styled.span`
    padding-right: 20px;
`
