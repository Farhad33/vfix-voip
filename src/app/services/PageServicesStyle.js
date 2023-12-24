'use client'
import styled from "styled-components";
import { color } from "@/common/Theme";
import Image from "next/image";


export const PageContainer = styled.div`
    
`
export const OverviewContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: calc(1vw + 50px);
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`
export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 50%;
    @media (max-width: 1000px) {
        width: 90%;
    }
`
export const HeadTitle = styled.div`

    h5 {
        color: ${color.Blue200};
        border-bottom: 2px solid ${color.Green200};
        padding-bottom: 3px;
    }
`
export const Title = styled.div`
    margin-top: 10px;
`
export const ParagraphContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: calc(1vw + 15px) 0;
    gap: 20px;
    width: 90%;
    @media (max-width: 1000px) {
        width: 95%;
    }
`
export const Paragraph = styled.div``

export const ListContainer = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 90%;
    padding-left: calc(1vw + 5px);
    margin-bottom: calc(1vw + 15px);
    @media (max-width: 1000px) {
        width: 95%;
    }
`


export const ListItems = styled.li``


export const ImageRightSide = styled(Image)`
    max-width: 100%;
    max-height: auto;
`
export const RightSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    @media (max-width: 1000px) {
        width: 90%;
        margin: calc(2vw + 30px) 0;
    }
`

export const FeatureContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: calc(2vw + 50px) 0;
`
export const FeatureHeadTitle = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: calc(1vw + 50px);
`
export const FeatureCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* justify-content: center; */
    justify-items: center;
    align-items: center;
    @media (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`
