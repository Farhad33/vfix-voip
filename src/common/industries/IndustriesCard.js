'use client'
import styled from "styled-components"
import Image from "next/image"

export default function IndustriesCard({title, content, urlImage}) {
    return(
        <CardContainer>
            <CardImage>
                <Image src={urlImage} alt={title} width={100} height={100} />
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
    justify-content: center;
    width: 40%;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    padding: 10px 5px;
    border-radius: 10px;
`
const CardImage = styled.div`

`
const CardContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 10px;
`
const CardTitle = styled.h4`

`

const CardContent = styled.p`
    font-size: 10px;
`