'use client'

import styled from "styled-components"

export const ITConsultingContainer = styled.div`

`

export const ITConsultingHead = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    margin: 40px 0;
    @media (max-width: 64px) {
        flex-direction: column;
    }
`

export const HeadTitle = styled.h3`
    text-align: center;
    margin-bottom: 20px;
`

export const HeadParagraph = styled.p`
    text-align: center;
    width: 60%;
`

export const ITConsultingCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 50px;

`