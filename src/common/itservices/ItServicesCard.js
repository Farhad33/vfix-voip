'use client'
import styled from "styled-components"
import Image from "next/image"
import {Button} from '../MainStyle'


export default function ItServicesCard({urlImage, title, content, btnText, btnUrl}) {
    return(
        <CardContainer>
            <CardImage>
                <Image src={urlImage} width={250} height={250} alt={title} />
            </CardImage>
            <CardContentContainer>
                <CardTitle>{title}</CardTitle>
                <CardContent>{content}</CardContent>
                <Button><ButtonLink href={btnUrl}>{btnText}</ButtonLink></Button>
            </CardContentContainer>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const CardImage = styled.div`
`
const CardContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const CardTitle = styled.h3``
const CardContent = styled.p``
const ButtonLink = styled.a``