'use client'
import { useState } from'react'
import { Button } from '../MainStyle'
import {ItManagedContainer, ItManagedLeftSide, ItManagedRightSide, LeftSideTitle, LeftSideParagraph} from './ItManagedStyle'
import Typography from '../Typography'
import { Data } from '../Data'
import ItManagedSVG from './ItManagedSVG'
import BookingIframe from '@/common/BookingIframe'

export default function ItManaged() {
    const [showBooking, setShowbooking] = useState(false)

    return (
        <ItManagedContainer>
            <ItManagedLeftSide>
                <LeftSideTitle>
                    <Typography variant='h2'>{Data.itmanaged.title}</Typography>
                </LeftSideTitle>
                <LeftSideParagraph>
                    <Typography variant='body3'>{Data.itmanaged.paragraph}</Typography>
                </LeftSideParagraph>
                <Button onClick={() => setShowbooking(true)} >Request Consultation</Button>
                <BookingIframe showBooking={showBooking} setShowbooking={setShowbooking} />
            </ItManagedLeftSide>
            <ItManagedRightSide>
                <ItManagedSVG alt="svg" />
            </ItManagedRightSide>
        </ItManagedContainer>
    )
}