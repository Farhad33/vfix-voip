'use client'
import styled from "styled-components";

export const ItServicesContainer = styled.div`

`   
export const ItServicesHead = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 30px;
    
`
export const HeadTitle = styled.div`
    text-align: center;
    padding-bottom: 15px;
`
export const HeadParagraph = styled.div`
    text-align: center;
    width: 60%;
`

export const ItServicesCardContainer = styled.div`
    display: grid;
    grid-template-columns: 40% 40%;
    gap: 30px;
    justify-content: center;
    align-items: center;
    @media (max-width: 440px) {
        grid-template-columns: 60%;
    }
`