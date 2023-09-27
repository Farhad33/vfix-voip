'use client'
import styled from "styled-components"
import Image from "next/image"
import {Button} from '../MainStyle'
import Typography from "../Typography"
import {color} from '../Theme'


export default function ItServicesCard({urlImage, title, content, btnText, btnUrl}) {
    return(
        <CardContainer>
            <CardImage>
                <Image src={urlImage} width={400} height={400} alt={title}  style={{width: '100%', height: 'auto'}} />
            </CardImage>
            <CardContentContainer>
                <CardTitle>
                    <Typography variant='h3'>
                        {title}
                    </Typography>
                </CardTitle>
                <CardContent>
                    <Typography variant='subline4'>
                        {content}
                    </Typography>
                </CardContent>
                <CardButton>
                    <ButtonLink href={btnUrl}>
                        <Typography variant='button'>
                            {btnText}
                        </Typography>
                    </ButtonLink>
                </CardButton>
            </CardContentContainer>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid ${color.Gray100};    
    border-radius: 10px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`

const CardImage = styled.div`
    padding: calc(1vw + 5px);
`
const CardContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 80%;
    @media (max-width: 440px) {
        width: 80%;
    }
`
const CardTitle = styled.h3`
    padding: calc(1vw + -1px);
`
const CardContent = styled.p`
    padding: calc(1vw + -2px);
`
const CardButton = styled(Button)`
    align-self: flex-end;
    margin: calc(1vw + 4px);
`
const ButtonLink = styled.a`
    align-self: flex-end;
`