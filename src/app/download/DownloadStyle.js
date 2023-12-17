'use client'
import styled from "styled-components";
import { color } from "@/common/Theme";


export const DownloadContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: calc(2vw + 5px);
    margin-top: 20px;
   
`
export const DownloadCard = styled.div`
    display: flex;
    width: 100%;
    padding: calc(2vw + 10px);
    border-radius: 40px;
    background-color: ${({color}) => color};
    color: ${color.White};
    ${({color}) => '#00D59C' === color ? 'flex-direction: row-reverse;' : '' }
    h3 {
        margin-top: 20px;
        margin-bottom: 10px;
    }
    ul {
        margin-left: 15px;
    }
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
    @media (max-width: 900px) {
        width: 100%;
    }
    @media (min-width: 900px) {
        ${({color}) => '#00D59C'=== color ? 'padding-left: 3%;' : 'padding-right: 3%;' }
    }
`
export const DownloadTitle = styled.div`
    padding-bottom: calc(1vw + 10px);
    color: ${color.White};
`
export const DownloadRightSide = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: auto;
        height: auto;
    }
    @media (max-width: 900px) {
        width: 90%;
        img {
            width: 100%;
            height: 100%;
        }
    }
`
export const MobileApp = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: calc(1vw + 11px);
    margin: 10px 0;
    img {
        width: 60%;
        height: 60%;
    }
    @media (max-width: 900px) {
        img {
            width: 25%;
            height: 25%;
        }
        justify-content: center;
    }
    @media (max-width: 700px) {
        img {
            width: 35%;
            height: 35%;
        }
        justify-content: center;
    }
    cursor: pointer;
`