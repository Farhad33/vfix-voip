'use client'
import { useState } from'react'
import { Button } from '../MainStyle'
import { HeaderContainer, HeaderLeftSide, HeadTitle, Paragraph, HeaderRightSide } from '../header/HeaderStyle'
import Typography from '../Typography'
import { Data } from '../Data'
import { useEffect } from 'react'
import { DotLottiePlayer } from '@dotlottie/react-player'
import BookingIframe from '@/common/BookingIframe'

export default function Header() {
    const [showBooking, setShowbooking] = useState(false)

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
                <Button onClick={() => setShowbooking(true)} >Request Consultation</Button>
                <BookingIframe showBooking={showBooking} setShowbooking={setShowbooking} />
            </HeaderLeftSide>
            <HeaderRightSide>
            <DotLottiePlayer
                src='/Header/nikan.lottie'
                autoplay
                loop
                mode="normal"
            >
            </DotLottiePlayer>
            </HeaderRightSide>
        </HeaderContainer>
    )
}