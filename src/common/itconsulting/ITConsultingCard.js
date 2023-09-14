'use client'
import styled from "styled-components";
import Image from "next/image";



export default function ITConsultingCard({title, content, urlImage}) {
    return(
        <CardContainer>
            <CardImage>
                <Image src={urlImage} alt={title} width={70} height={70} />
            </CardImage>
            <CardContetnContainer>
                <CardTitle>{title}</CardTitle>
                <CardContetn>{content}</CardContetn>
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
`
const CardImage = styled.div`
    margin-bottom: 30px;
`
const CardContetnContainer = styled.div`

`
const CardTitle = styled.h3`
    margin-bottom: 20px;
`

const CardContetn = styled.p`

`