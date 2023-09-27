'use client'
import styled from "styled-components";

export const Container = styled.div`

`

export const SuccessContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    width: 100%;
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items:center;
    }
`
export const SuccessLeftSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    @media (max-width: 768px) {
        flex-direction: row; 
        gap: 20px;
    }
`
export const SuccessCenterSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: row; 
        gap: 20px;
    }
`

export const SuccessRightSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    @media (max-width: 768px) {
        align-items: center;
        justify-content: center;
    }
`

export const SuccessTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        align-items: center;
        justify-content: center;
        width: 80%;
        margin-top: 30px;
    }
`

export const TitleRightSide = styled.div`
    margin-bottom: 30px;
    @media (max-width: 768px) {
        margin-bottom: 15px;
    }
`
export const ParagraphRightSide = styled.span`
    margin-bottom: 30px;
    @media (max-width: 768px) {
        margin-bottom: 15px;
    }
`