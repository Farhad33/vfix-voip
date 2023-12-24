'use client'
import styled from 'styled-components'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Typography from "@/common/Typography"
import { Button } from "@/common/MainStyle"
import { data } from './data'

export default function MiddleSection() {
    const { push } = useRouter()

    return (
        <MiddleSectionContainer>
            <TopContainer>
                <Typography variant='h4'>Ready To Transform Your Business?</Typography>
                <Button onClick={() => push('#contact-us')}>Request Consultation</Button>
            </TopContainer>
            <BottomContainer>
                {data.middleSection.map((link, index) => (
                    <Image key={index} src={link} width={130} height={130} alt={link.split('.png')[0]} />
                ))}
            </BottomContainer>
        </MiddleSectionContainer>
    )
}

const MiddleSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 950px) {
        flex-direction: column;
    }
`
const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid #000;
    padding: 20px 30px;
    border-radius: 50px;
    width: 820px;
    margin: 20px auto;
    @media (max-width: 920px) {
        width: 100%;
    }
    @media (max-width: 640px) {
        flex-direction: column;
        text-align: center;
        gap: 20px;
        border: none;
    }
`
const BottomContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 20px auto;
    gap: 20px;
    img {
        width: auto;
        height: auto;
    }
    background: rgba(225, 225, 225, 0.35);
    border-radius: 30px;
`