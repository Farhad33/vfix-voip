'use client'
import styled from "styled-components";
import Image from "next/image";
import Typography from "../Typography";
import SVGComponents from "@/common/SVGComponents"


export default function ITConsultingCard({ title, paragraph, svg }) {
    const SVGComponent = SVGComponents[svg]

    return(
        <CardContainer>
            <SVGComponent />
            <CardContetnContainer>
                <Typography variant='h4'>
                    {title}
                </Typography>
                <Typography variant='body2'>
                    {paragraph}
                </Typography>
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
    width: 410px;
    height: 450px;
    padding: 40px;
    @media (max-width: 944px) {
        height: unset;
        padding: 30px;
    }
    svg {
        width: 75px;
        height: 75px;
        margin-bottom: 20px;
    }
`
const CardImage = styled(Image)`
    margin-bottom: calc(1vw + 6px);
`
const CardContetnContainer = styled.div`
    h4 {
        margin-bottom: calc(1vw + 6px);
    }

`