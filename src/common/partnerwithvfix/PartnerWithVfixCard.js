'use client'
import styled from "styled-components";
import Image from "next/image";
import Typography from "../Typography";

export default function PartnerWithVfixCard({title, content, urlImage}) {
    return(
        <CardContainer>
            <CardImage src={urlImage} alt={title} width={50} height={50} />
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
`
const CardImage = styled(Image)`
    margin-bottom: 20px;
`