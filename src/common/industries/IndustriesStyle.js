'use client'
import styled from "styled-components"


export const IndustriesContainer = styled.div`
`
export const IndustriesHead = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    margin: 40px 0;

`

export const HeadTitle = styled.h3`
    text-align: center;
    margin-bottom: 20px;
`

export const HeadParagraph = styled.p`
    text-align: center;
    width: 60%;
`

export const IndustriesCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 35px;
    @media (max-width: 640px) {
        flex-direction: column;
    }
`