'use client'
import styled from "styled-components"

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
    margin: 45px 0;

`

export const HeadTitle = styled.h3`
    text-align: center;
    margin-bottom: 20px;
    width: 65%;
`

export const HeadParagraph = styled.p`
    text-align: center;
    width: 55%;
    font-size: 12px;
`

export const PartnerWithVfixContainerCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    gap: 35px;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
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
    border-image: linear-gradient(to right, #00D59C, #009CD5); 
    border-image-slice: 1; 
    border-radius: 30px; 
`
export const ContactUsParagraph = styled.p`
    font-size: 12px;
    width: 70%;
`