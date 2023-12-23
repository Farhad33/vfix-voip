'use client'
import Image from 'next/image'
import { Button } from '../MainStyle'
import { HeaderContainer, HeaderLeftSide, HeadTitle, Paragraph, HeaderRightSide } from '../header/HeaderStyle'
import Typography from '../Typography'
import { Data } from '../Data'
import { useEffect } from 'react'

export default function Header() {

    useEffect(() => {
        import("@lottiefiles/lottie-player")
    });

    return (
        <HeaderContainer>
            <HeaderLeftSide>
                <HeadTitle>
                    <Typography variant='h2'>{Data.header.title}</Typography>
                </HeadTitle>
                <Paragraph>
                    <Typography variant='body3'>
                        {Data.header.paragraph}
                    </Typography>
                </Paragraph>
                <Button>{Data.header.button}</Button>
            </HeaderLeftSide>
            <HeaderRightSide>
                <lottie-player
                    autoplay
                    loop
                    mode="normal"
                    src={Data.header.img}
                ></lottie-player>
            </HeaderRightSide>
        </HeaderContainer>
    )
}