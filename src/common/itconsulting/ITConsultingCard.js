'use client'
import styled from "styled-components";
import Image from "next/image";
import Typography from "../Typography";



export default function ITConsultingCard({title, content, urlImage}) {
    return(
        <CardContainer>
            <CardImage>
                <Image src={urlImage} alt={title} width={70} height={70}  style={{width: '100%'}}/>
            </CardImage>
            <CardContetnContainer>
                <CardTitle>
                    <Typography variant='h3'>
                        {title}
                    </Typography>
                </CardTitle>
                <CardContetn>
                    <Typography variant='subline4'>
                        {content}
                    </Typography>
                </CardContetn>
            </CardContetnContainer>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: none;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    border-radius: 10px;
    width: 43%;
    padding: 45px;
    @media (max-width: 640px) {
        width: 75%;
    }
`
const CardImage = styled.div`
    margin-bottom: calc(1vw + 6px);
`
const CardContetnContainer = styled.div`

`
const CardTitle = styled.h3`
    margin-bottom: calc(1vw + -1px);
`

const CardContetn = styled.p`

`