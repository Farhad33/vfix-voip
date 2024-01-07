'use client'
import styled from "styled-components"
import Typography from "../Typography"
import { color } from "../Theme"
import SVGComponents from "@/common/SVGComponents"

export default function ServicesCard({title, content, svg}) {
    const SVGComponent = SVGComponents[svg]
    return (
        <CardContainer>
            <CardImage>
                <SVGComponent />
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
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    border: 1px solid ${color.Blue100};
    border-radius: 10px;
    padding: 20px;
    svg {
        width: 70px;
        height: 70px;
    }
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