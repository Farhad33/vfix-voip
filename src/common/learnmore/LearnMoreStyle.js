'use client'
import styled from "styled-components"

export const LearnMoreContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    @media (max-width: 768px) {
        flex-direction: column;
        padding: calc(2vw + 8px);
    }

`
export const LearnMoreLeftSide =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 50%;
    @media (max-width: 768px) {
        align-items: center;
        width: 60%;
    }
`
export const LeftSideTitle = styled.div`
    margin-bottom: calc(2vw + 1px);
    @media (max-width: 768px) {
        text-align: center;
    }

`
export const LeftSideParagraph = styled.span`
    margin-bottom: calc(2vw + 1px);
    @media (max-width: 768px) {
        text-align: center;
    }
`
export const LeftSideCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 50px;
    @media (max-width: 768px) {
        padding-bottom: 20px;
    }
`
export const LearnMoreRightSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
`