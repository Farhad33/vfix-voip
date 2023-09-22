'use client'
import styled from "styled-components";
import Image from "next/image";
import Typography from "../Typography";

export default function PartnerWithVfixCard({title, content, urlImage}) {
    return(
        <CardContainer>
            <CardImage>
                <Image src={urlImage} alt={title} width={50} height={50} />
            </CardImage>
            <CardContentContainer>
                <CardTitle>
                    <Typography variant='h4'>
                        {title}
                    </Typography>
                </CardTitle>
                <CardContent>
                    <Typography variant='subline4'>
                        {content}
                    </Typography>
                </CardContent>
            </CardContentContainer>
        </CardContainer>
    )
}
const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 60%;
    @media (max-width: 768px) {
        width: 30%;
    }
    @media (max-width: 500px) {
        width: 60%;
    }
`
const CardImage = styled.div`
    margin-bottom:calc(1vw + -2px);
`
const CardContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 10px;
`
const CardTitle = styled.h4`
    padding: calc(1vw + -7px);
`

const CardContent = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`