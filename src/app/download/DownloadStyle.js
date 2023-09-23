'use client'
import styled from "styled-components";
import { color } from "@/common/Theme";


export const DownloadContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: calc(3vw + 25px);
    padding-top: calc(2vw + 20px);
    padding-bottom: calc(2vw + 20px);
   
`
export const DownloadCard = styled.div`
    display: flex;
    width: 100%;
    padding: 50px 20px;
    border-radius: 60px;
    background-color: ${({color}) => color};
    margin: 10px 0;
    ${({color}) => '#00D59C' === color ? 'flex-direction: row-reverse;' : '' }
    @media (max-width: 900px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const DownloadLeftSide = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${({color}) => '#00D59C'=== color ? 'padding-right: 5%;' : 'padding-left: 5%;' }
    @media (max-width: 900px) {
        width: 80%;
        padding-bottom: calc(2vw + 5px);
    }
`
export const DownloadTitle = styled.h1`
    padding-bottom: calc(2vw + 10px);
    color: ${color.White};
`

export const DownloadParagraph = styled.p`
    color: ${color.White};
`
export const DownloadRightSide = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 900px) {
        padding-top: calc(3vw + 27px);
    }
`
export const MobileApp = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-top: calc(2vw + 20px);
    gap: calc(2vw + -5px);
    @media (max-width: 900px) {
        justify-content: center;
        gap: calc(2vw + 11px);
    }
`