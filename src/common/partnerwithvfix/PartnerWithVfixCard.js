'use client'
import styled from "styled-components";
import Typography from "../Typography";
import SVGComponents from "@/common/SVGComponents"

export default function PartnerWithVfixCard({title, content, svg}) {
    const SVGComponent = SVGComponents[svg]

    return(
        <CardContainer>
            <SVGComponent />
            <Typography variant='h4'>
                {title}
            </Typography>
            <Typography variant='body2'>
                {content}
            </Typography>
        </CardContainer>
    )
}
const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    h4 {
        margin-bottom: 20px;
    }
    @media (max-width: 927px) {
        width: 100%;
    }
    svg {
        margin-bottom: 20px;
    }
`