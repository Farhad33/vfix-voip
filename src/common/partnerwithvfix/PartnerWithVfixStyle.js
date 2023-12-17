'use client'
import styled from "styled-components"
import { color } from "../Theme"

export const PartnerWithVfixContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: calc(1vw + -4px);
`

export const PartnerWithVfixHead = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    margin-bottom: 30px;
    h3 {
        margin-bottom: 20px;
    }
`

export const HeadTitle = styled.div`
    text-align: center;
    margin-bottom: 20px;
    width: 65%;
`

export const HeadParagraph = styled.div`
    text-align: center;
    width: 55%;
    font-size: 12px;
`

export const PartnerWithVfixContainerCard = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 35px;
`
export const PartnerWithVfixContactUs = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    margin-top: 50px;
    width: 60%;
    border: 1px solid transparent;
    background-clip: content-box; 
    border-image: linear-gradient(to right, ${color.Green200}, ${color.Blue200}); 
    border-image-slice: 1; 
    border-radius: 30px; 
`
export const ContactUsParagraph = styled.div`
    font-size: 12px;
    width: 70%;
`