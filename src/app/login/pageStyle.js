'use client'
import styled from "styled-components"
import { color } from "@/common/Theme"

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
`
export const LoginHead = styled.div`
    margin-bottom: calc(2vw + 20px);
    position: relative;
    ::after {
        content: "";
        position: absolute;
        top: 100%;
        width: 100%;
        left: 0;
        height: 5px;
        border-radius: 2px;
        background: linear-gradient(130deg,${color.Blue200},${color.Green200} 41.07%, ${color.Green200} 76.05%);
        margin-top: calc(0.5vw + 1px);
    }
    h2 {
        padding: 15px 0;
    }
`
export const LoginCardContianer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    width: 80%;
    grid-column-gap: calc(5vw + 50px);
    margin-top: calc(2vw + 10px);
`