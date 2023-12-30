'use client'
import styled from "styled-components";
import Image from "next/image";
import Typography from "../Typography";

export default function PartnerWithVfixCard({title, content, Svg}) {
    return(
        <CardContainer>
            <Svg />
            <Typography variant='h4'>
                {title}
            </Typography>
            <Typography variant='body2'>
                {content}
            </Typography>
        </CardContainer>
    )
}
const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    h4 {
        margin-bottom: 20px;
    }
    @media (max-width: 927px) {
        width: 100%;
    }
    svg {
        margin-bottom: 20px;
    }
`