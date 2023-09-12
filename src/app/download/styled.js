'use client'

import styled from "styled-components";


export const Page = styled.div`
    width: 100vw;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* display: flex; */
    /* justify-content: center; */
    /* background-color: red; */

`

export const DownloadCard = styled.div`
    width: 100%;
    min-height: 700px;
    display: flex;
    border-radius: 60px;
    background-color: ${({color}) => color};
    margin: 10px 0;
    ${({color}) => '#00D59C'===color ? 'flex-direction: row-reverse;' : '' }

    
    
`

export const Content = styled.div`
    h1 {
        padding-bottom: 50px;
        font-size: 25px;
    }
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${({color}) => '#00D59C'===color ? 'padding-right: 5%;' : 'padding-left: 5%;' }
    img {
        object-fit: cover;
    }

`
export const Photo = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    img {
        padding: 10px 0 0 0;
        width: auto;
        max-width: 100%;
        height: 700px;
        object-fit: cover;
    }

`
export const ContentImg = styled.div`
    padding-top: 50px;

`