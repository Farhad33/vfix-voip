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
            <Typography variant='h4'>{title}</Typography>
            <Typography variant='body2'>{content}</Typography>
        </CardContainer>
    )

}

const CardContainer = styled.div`
    min-width: 200px;
    width: 300px;
    height: 475px;

    border: 1px solid ${color.Blue100};
    border-radius: 10px;
    padding: 20px;
    @media (max-width: 700px) {
        width: 100%;
        height: unset;
    }
    h4 {
        padding-bottom: 15px;
    }
`
const CardImage = styled.div`
    padding-bottom: 25px;

`

const CardTitle = styled.h2`
    font-size: 20px;
    font-weight: 700;
    color: ${color.Black} ;
    padding-bottom: 15px;
`