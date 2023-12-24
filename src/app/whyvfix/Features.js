'use client'
import styled from'styled-components'
import Typography from '@/common/Typography'
import Image from "next/image"
import { data } from './data'

export default function Features(){
    return(
        <FeatureContainer>
            <Typography variant='h2'>{data.featureTitle}</Typography>
            <FeatureCardContainer>
                {data.features.map(({ img, title }, index) => (
                    <FeatureCard
                        key={index}
                    >
                        <ImageContainer>
                            <Image src={img} width={200} height={200} alt={img.split('.png')[0]} />
                        </ImageContainer>
                        <Typography variant='body2'>{title}</Typography>
                    </FeatureCard>
                ))}
            </FeatureCardContainer>
        </FeatureContainer>
    )
}

const FeatureCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
`
const ImageContainer = styled.div`
    width: 50px;
    img {
        width: 100%;
        height: auto;
        margin: 10px 0;
    }
`
const FeatureContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 20px auto;
    h2 {
        margin: 50px 0;
        text-align: center;
    }
`
const FeatureCardContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;;
`