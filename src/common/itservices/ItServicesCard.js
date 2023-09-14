'use client'
import styled from "styled-components"
import Image from "next/image"
import {Button} from '../MainStyle'


export default function ItServicesCard({urlImage, title, content, btnText, btnUrl}) {
    return(
        <CardContainer>
            <CardImage>
                <Image src={urlImage} width={400} height={400} alt={title} />
            </CardImage>
            <CardContentContainer>
                <CardTitle>{title}</CardTitle>
                <CardContent>{content}</CardContent>
                <CardButton><ButtonLink href={btnUrl}>{btnText}</ButtonLink></CardButton>
            </CardContentContainer>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #E3E3E3;    border-radius: 10px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`

const CardImage = styled.div`
    padding: 50px 10px 30px 10px;
`
const CardContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 80%;
`
const CardTitle = styled.h3`
    padding-bottom: 25px;
`
const CardContent = styled.p`
    padding-bottom: 25px;
`
const CardButton = styled(Button)`
    align-self: flex-end;
    margin-bottom: 30px;
`
const ButtonLink = styled.a`
    align-self: flex-end;
`