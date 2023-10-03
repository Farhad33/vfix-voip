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


export const ImageRiteSide = styled(Image)`
    max-width: 100%;
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

export const VfixCaontainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: calc(2vw + 50px) 0;
`
export const VfixHeadTitle = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: calc(1vw + 15px);
`
export const VfixCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    
    @media (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`
export const VfixHead = styled.div`
    margin-bottom: calc(1vw + 35px);
`
export const VfixParagraph = styled.div`

`


export const ServicesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ServicesHead = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: calc(1vw + 35px);

`
export const ServicesTitle = styled.div``
export const ServicesParagraph = styled.div``
export const ServicesCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    justify-items: center;
    align-items: center;
    gap: calc(1vw + 20px);
`
