'use client'
import styled from "styled-components";

export const ItManagedContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 50px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
export const ItManagedLeftSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 50%;
    @media (max-width: 768px) {
        align-items: center;
        justify-content: center;
        width: 80%;
        margin-bottom: 30px;
    }
`

export const ItManagedRightSide = styled.div`
    width: 50%;
    @media (max-width: 768px) {
        width: 80%;
    }
`

export const LeftSideTitle = styled.div`
    margin-bottom: 30px;
    @media (max-width: 768px) {
        text-align: center;
        margin-bottom: 15px;
    }
    @media (max-width: 640px) {
        margin-bottom: 7px;
    }
`
export const LeftSideParagraph = styled.span`
    margin-bottom: 30px;
    @media (max-width: 768px) {
        margin-bottom: 15px;
    }
    @media (max-width: 640px) {
        margin-bottom: 7px;
    }
`