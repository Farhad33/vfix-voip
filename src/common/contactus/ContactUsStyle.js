'use client'
import styled from "styled-components"
import { color } from "../Theme"
import { Theme } from "../Theme"

export const ContactContainer = styled.div`
    max-width: 100%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: calc(2vw + 60px);
    padding-top: calc(2vw + 14px);
    z-index: 1;
`

export const ContactTitle = styled.div`
    padding-bottom: calc(2vw + -13px);
    @media (max-width: 1000px) {
        padding-bottom: calc(2vw + -4px);
    }
`

export const ContactParagraph = styled.div`
    padding-bottom : calc(2vw + -13px);
    @media (max-width: 1000px) {
        padding-bottom: calc(2vw + 2px);
    }
`

export const ContactFormContainer = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    border-radius: 20px;
    background-color: ${color.Gray300};
    z-index: 3;
    overflow: hidden;
    @media (max-width: 1000px) {
        flex-direction: column;
    }
`

export const ContactLeftSide = styled.div`
    display: flex;
    justify-content: center;
    z-index: 3;
    width: 50%;
    @media (max-width: 1000px) {
        width: 100%;
    }
    @media (max-width: 470px) {
        img {
            width: 300px;
            height: 300px;
        }
        /* width: 100%;
        row-gap: calc(2vmin + 25px); */
    }
`
const GeneraContactStyle = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: calc(1vw + 2px);
    color: ${color.White};
    width: 60%;
    @media (max-width: 1380px) {
        width: 55%;
    }
    @media (max-width: 1000px) {
        align-items: center;
        width: 60%;
    }
    @media (max-width: 800px) {
        width: 70%;
    }
`
export const ContentAddress = styled(GeneraContactStyle)`
  
`
export const Address = styled.div`

`

export const ContentPhone = styled(GeneraContactStyle)``
export const Phones = styled.div``

export const ContentMail = styled(GeneraContactStyle)``
export const Emails = styled.div``


export const ContactRightSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: calc(2vw + 40px);
    margin-bottom: calc(2vw + 18px);
    width: 50%;
    z-index: 3;
    @media (max-width: 470px) {
        margin-top: 0;
    }
    @media (max-width: 1000px) {
        width: 100%;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        input::placeholder, textarea::placeholder {
            color: ${color.White};
        }
        input[type=text], input[type=tel], input[type=email], textarea {
            width: 100%;
            height: 30px;
            margin-bottom: 20px;
            font-size: 16px;
            color: ${({theme}) => theme.Text_Title};
            font-weight: 600;
            background-color: ${color.Gray400};
            border-radius: 5px;
            padding: calc(1vw + 1px);
            @media (max-width: 1170px) {
                width: 80%;
            }
            @media (max-width: 1000px) {
                width:100%;
            }
            @media (max-width: 600px) {
                width: 90%;
            }
        }
        textarea {
            height:120px;
        }

        input[type=submit] {
            background: linear-gradient(90deg, ${color.Green200} 0%, ${color.Blue200} 100%);
            border: none;
            border-radius: 20px;
            height: 40px;
            font-size: ${({variant}) => Theme.typography.fontSize.button};
            padding: 0 25px;
            color: ${color.White};
            &:hover {
                background: ${color.Black};
                transition: all .5s ease;
            }
        }
    }
`
export const FormTitle = styled.div`
    color: ${color.White};
    padding-bottom: calc(1vw + 5px);
`
export const Message = styled.p`
    color: #00d0a1;
    font-size: 21px;
    margin: 10px;
    text-align: center;
`

export const Shadow = styled.div`
    width: 75%;
    height: 127%;
    left: -32.36%;
    right: 64.77%;
    top: 1.73%;
    bottom: -75.93%;
    background: radial-gradient(102.35% 88.67% at 69.13% 94.51%, #4C4E51 53.1%, #686868 77.6%, #000000 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transform: rotate(-34.53deg);
    position: absolute;
    z-index: 2;
    border-radius: 30%;
    @media (max-width: 1270px) {
        top: -6.27%;
        left: -30.36%;
    }
    @media (max-width: 1100px) {
        top: -9.27%;
        left: -31.36%;
    }
    @media (max-width: 1000px) {
        top: -32.27%;
        left: -49.36%;
        width: 100%;
        height: 148%;
    }
    @media (max-width: 600px) {
        top: -53.27%;
        left: -93.36%;
        width: 114%;
        height: 163%;
    }
    @media (max-width: 500px) {
        top: -55.27%;
        left: -99.36%;
        width: 124%;
        height: 165%;
    }
    @media (max-width: 470px) {
        top: -55.27%;
        left: -100.36%;
        width: 127%;
        height: 164%;
        transform: rotate(-21.53deg);
    }
`


