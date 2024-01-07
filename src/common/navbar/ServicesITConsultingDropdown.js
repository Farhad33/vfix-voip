'use client'
import styled from "styled-components";
import { color } from "../Theme"
import Image from "next/image";
import { Button } from "../MainStyle";
import Typography from "../Typography";
import { ItConsultingData } from '../Data';
import { useRouter } from 'next/navigation'

export default function ServicesItConsulting({ handleMenuClick }) {
    const { push } = useRouter();

    return (
        <ItConsultingContainer>
            <ItConsultingTitle>
                <RoutConsulting href={ItConsultingData.route}>
                    {ItConsultingData.title}
                </RoutConsulting>
            </ItConsultingTitle>
            <ItConsultingImage src={ItConsultingData.icon} width={160} height={100} alt={ItConsultingData.title} />
            <Typography variant='subline2'>{ItConsultingData.paragraph}</Typography>
            <ItConsultingButton onClick={() => { 
                push(ItConsultingData.route)
                handleMenuClick()
            }}>{ItConsultingData.button}</ItConsultingButton>
        </ItConsultingContainer>
    );
}


const ItConsultingButton = styled(Button)`
    margin-top: 20px;
`
const ItConsultingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 272px;
    @media (max-width: 768px) {
        a {
            color: ${color.White};
        }
    }
`
const ItConsultingTitle = styled.span`
  
`
const ItConsultingImage = styled(Image)`
    width: 100%;
    height: auto;
    margin: 20px 0;
`
const RoutConsulting = styled.a`
    background-image: linear-gradient(to right, ${color.Green200}, ${color.Blue200});
    background-clip: text;
    -webkit-background-clip: text; 
    color: transparent; 
    text-decoration: none;
`