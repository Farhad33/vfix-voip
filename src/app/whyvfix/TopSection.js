'use client'
import styled from 'styled-components'
import Image from 'next/image'
import Typography from "@/common/Typography"
import { data } from './data'

export default function TopSection() {

    return (
        <TopSectionContainer>
            <LeftSideContainer>
                <Typography variant='h2'>{data.topSection.title}</Typography>
                <Items>
                    <Typography variant='body4'>{data.topSection.listTitle}</Typography>
                    {data.topSection.list.map((text, index) => (
                        <Item key={index}>
                            <Typography component='span' variant='body4'>{text}</Typography>
                        </Item>
                    ))}
                </Items>
            </LeftSideContainer>
            <RightSideContainer>
                <Image src={data.topSection.img} width={1000} height={1000} alt='why vfix' />
            </RightSideContainer>
        </TopSectionContainer>
    )
}

const TopSectionContainer = styled.div`
    display: flex;
    @media (max-width: 950px) {
        flex-direction: column;
    }
`
const LeftSideContainer = styled.div`
    width: 50%;
    @media (max-width: 950px) {
        width: 100%;
    }
`
const RightSideContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    margin-bottom: 20px;
    img {
        width: 90%;
        height: auto;
    }
    @media (max-width: 950px) {
        width: 100%;
    }
`
const Items = styled.ul`
    margin: 50px;
    p {
        margin-bottom: 10px;
    }
`
const Item = styled.li`
`