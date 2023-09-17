'use client'
import styled from "styled-components"
import Typography from "../Typography"

export default function LearnMoreCard({title, content}) {
    return (
        <CardContainer>     
            <CardTitle>
                <Typography>
                    {title}
                </Typography>
            </CardTitle>
            <CardContent>
                <Typography variant='body2'>
                    {content}
                </Typography>
            </CardContent>
        </CardContainer>
    )
}


const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 80%;
    border-bottom: 1px solid #586780;
    @media (max-width: 768px) {
        width: 100%;
        justify-content: flex-start;
    }
`
const CardTitle = styled.h3`
    font-size: 50px;
    font-weight: 300;
    color: #586780;
    padding-right: 20px;
`
const CardContent = styled.p`
    color: #586780;
`