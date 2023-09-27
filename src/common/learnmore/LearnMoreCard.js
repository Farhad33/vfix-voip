'use client'
import styled from "styled-components"
import Typography from "../Typography"
import { color } from "../Theme"

export default function LearnMoreCard({title, content}) {
    return (
        <CardContainer>     
            <CardTitle>
                <Typography variant='h4'>
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
    border-bottom: 1px solid ${color.Blue50};
    @media (max-width: 768px) {
        width: 100%;
        justify-content: flex-start;
    }
`
const CardTitle = styled.div`
    font-size: 50px;
    font-weight: 300;
    color:  ${color.Blue50};
    padding-right: 20px;
`
const CardContent = styled.div`
    color:  ${color.Blue50};
`