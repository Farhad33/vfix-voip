'use client'
import styled from "styled-components"
import Image from "next/image"
import Typography from "../Typography"

export default function IndustriesCard({title, content, urlImage}) {
    return(
        <CardContainer>
            <CardContentContainer>
                <Typography variant='h4'>
                    {title}
                </Typography>
                <Typography variant='body2'>
                    {content}
                </Typography>
            </CardContentContainer>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    display: flex;
    align-items: center;
    width: 500px;
    height: 300px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    padding: 20px;
    border-radius: 10px;
    @media (max-width: 1150px) {
        height: unset;
    }
`
const CardContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 10px;
    h4 {
        margin-bottom: 15px;
    }
`