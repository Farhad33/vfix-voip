'use client'
import styled from "styled-components"
import Image from "next/image"
import Typography from "../Typography"

export default function IndustriesCard({title, content, urlImage}) {
    return(
        <CardContainer>
            <CardImage>
                <Image src={urlImage} alt={title} width={100} height={100} sizes="100vw" />
            </CardImage>
            <CardContentContainer>
                <CardTitle>
                    <Typography variant='h4'>
                        {title}
                    </Typography>
                </CardTitle>
                <CardContent>
                    <Typography variant='body3'>
                        {content}
                    </Typography>
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
    @media (max-width: 640px) {
        width: 65%;
    }
`
const CardImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const CardContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding-left: 10px;
`
const CardTitle = styled.div`

`

const CardContent = styled.span`
    
`