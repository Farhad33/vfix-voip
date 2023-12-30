'use client'
import styled from "styled-components"
import {Button} from '../MainStyle'
import Typography from "../Typography"
import {color} from '../Theme'
import { useRouter } from 'next/navigation'

export default function ItServicesCard({ Svg, title, content, btnText, btnUrl }) {
    const { push } = useRouter()

    return(
        <CardContainer>
            <Svg />
            <CardContentContainer>
                <div>
                    <CardTitle>
                        <Typography variant='h4'>
                            {title}
                        </Typography>
                    </CardTitle>
                    <CardContent>
                        <Typography variant='body2'>
                            {content}
                        </Typography>
                    </CardContent>
                </div>
                <CardButton onClick={() => push(btnUrl)}>
                    {btnText}
                </CardButton>
            </CardContentContainer>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid ${color.Gray100};    
    border-radius: 10px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    height: 670px;
    padding: calc(1vw + 5px);
    padding-top: 0;
    svg {
        width: 100%;
        height: 100%;
    }
    max-width: 400px;
    @media (max-width: 922px) {
        height: unset;
    }
`
const CardContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`
const CardTitle = styled.div`
    margin-bottom: 10px;
    margin-top: 20px;
`
const CardContent = styled.div`
`
const CardButton = styled(Button)`
    align-self: flex-end;
    margin-top: 30px;
    @media (max-width: 922px) {
        margin: 10px 0;
    }
`