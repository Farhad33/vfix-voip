'use client'
import styled from "styled-components";
import Image from "next/image";
import Typography from "../Typography";
import { color } from "../Theme";

export default function ServicesCard({title, content, urlImage}) {
    return (
        <CardContainer>
            <CardImage>
                <Image src={urlImage} alt={title} width={50} height={55} />
            </CardImage>
            <CardTitle>{title}</CardTitle>
            <CardContent>{content}</CardContent>
        </CardContainer>
    )

}

const CardContainer = styled.div`
    width: 240px;
    height: 310px;
    border: 1px solid ${color.Blue100};
    border-radius: 10px;
    padding: 30px 10px 30px 30px;
;
`
const CardImage = styled.div`
    padding-bottom: 25px;

`

const CardTitle = styled.h2`
    font-size: 20px;
    font-weight: 700;
    color: #000000 ;
    padding-bottom: 15px;
`
const CardContent = styled.p`
    padding-bottom: 15px;
    font-size: 12px;
`