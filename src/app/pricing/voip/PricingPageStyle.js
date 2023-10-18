'use client'
import styled from "styled-components";

export const PricingPageContainer = styled.div`
    width: 85%;
    margin: auto;
`
export const PricingCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    width: 100%;
    gap: 20px;
    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
        width: 100%;
        gap: 40px;
    }
    @media (max-width: 700px) {
        grid-template-columns: repeat(1, 1fr);
        width: 100%;
    }
`
export const ContainerMap = styled.div``
export const ItemList = styled.div``

export const PricingTitle = styled.div`
    text-align: center;
    margin: 60px 0;
`