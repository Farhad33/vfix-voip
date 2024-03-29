'use client'
import { useState } from'react'
import Typography from "@/common/Typography"
import { Data } from "./Data"
import { Page } from "../../pagestyle"
import { Button } from "@/common/MainStyle"
import {
    PageContainer,
    LeftSide,
    RightSide,
    Title,
    Paragraph,
    ParagraphContainer,
    OverviewContainer,
    VfixCaontainer,
    VfixHeadTitle,
    VfixCardContainer,
    VfixHead,
    ServicesContainer,
    ServicesHead,
    VfixParagraph,
    ServicesTitle,ServicesParagraph,
    ServicesCardContainer
} from './PageStyle'
import VfixCards from './VfixCard'
import ServicesCard from "./ServicesCard"
import SVGComponent from "./SVGComponent"
import BookingIframe from '@/common/BookingIframe'

  
export default function ITConsulting() {
    const [showBooking, setShowbooking] = useState(false)

    return (
        <Page>
            <PageContainer>
                <OverviewContainer>
                    <LeftSide>
                        <Title>
                            <Typography variant='h2'>
                                {Data.Overview.title}
                            </Typography>
                        </Title>
                        <Typography variant='h5'>
                            {Data.Overview.subTitle}
                        </Typography>
                        <ParagraphContainer>
                            <Paragraph >
                                <Typography variant='body3'>
                                    {Data.Overview.paragraph}
                                </Typography>
                            </Paragraph>
                        
                        </ParagraphContainer>
                        <Button onClick={() => setShowbooking(true)} >Request Consultation</Button>
                        <BookingIframe showBooking={showBooking} setShowbooking={setShowbooking} />
                    </LeftSide>
                    <RightSide>
                        <SVGComponent />
                    </RightSide>
                </OverviewContainer>
                <ServicesContainer>
                    <ServicesHead>
                        <ServicesTitle>
                            <Typography variant='h2'>
                                {Data.Overview.ourServicesTitle}
                            </Typography>
                        </ServicesTitle>
                        <ServicesParagraph>
                            <Typography variant='body3'>
                                {Data.Overview.ourServicesParagraph}
                            </Typography>
                        </ServicesParagraph>
                    </ServicesHead>
                    <ServicesCardContainer>
                        {
                            Data.Overview.ourServices.map((card, index) => (
                                <ServicesCard 
                                    key={index}
                                    title={card.title}
                                    content={card.paragraph}
                                    urlImage={card.img}
                                />
                            ))
                        }
                    </ServicesCardContainer>
                </ServicesContainer>
                <VfixCaontainer>
                    <VfixHead>
                        <VfixHeadTitle>
                            <Typography variant='h2'>
                                {Data.Overview.howCanVfixTitle}
                            </Typography>
                        </VfixHeadTitle>
                        <VfixParagraph>
                            <Typography variant='body3'>
                                {Data.Overview.howCanVfixParagraph}
                            </Typography>
                        </VfixParagraph>
                    </VfixHead>
                            
                            <VfixCardContainer>
                                {
                                    Data.Overview.howCanVfix.map((card, index) => (
                                        <VfixCards 
                                            key={index}
                                            title={card.title}
                                            content={card.paragraph}
                                            urlImage={card.img}
                                        />
                                    ))
                                }
                            </VfixCardContainer>
                </VfixCaontainer>
                
            </PageContainer>
        </Page>
    )
}