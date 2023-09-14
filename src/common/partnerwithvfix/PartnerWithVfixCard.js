'use client'
import styled from "styled-components";
import Image from "next/image";

export default function PartnerWithVfixCard({title, content, urlImage}) {
    return(
        <CardContainer>
            <CardImage>
                <Image src={urlImage} alt={title} width={50} height={50} />
            </CardImage>
            <CardContentContainer>
                <CardTitle>
                    {title}
                </CardTitle>
                <CardContent>
                    {content}
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
`
const CardImage = styled.div`
    margin-bottom: 20px;
`
const CardContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 10px;
`
const CardTitle = styled.h4`
    margin-bottom: 10px;
`

const CardContent = styled.p`
    font-size: 10px;
`