'use client'
import styled from "styled-components"


export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 50px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

export const HeaderLeftSide = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 40%;
    @media (max-width: 768px) {
        width: 100%;
    }
`
export const HeaderRightSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    @media (max-width: 768px) {
        width: 100%;
    }
    img {
        width: 100%;
        height: auto;
    }
`
export const HeadTitle = styled.div`
    margin-bottom: 25px;
    @media (max-width: 1200px) {
        font-size: 30px;
  }
`

export const Paragraph = styled.div`
    margin-bottom: 25px;
    @media (max-width: 1200px) {
    }
`
