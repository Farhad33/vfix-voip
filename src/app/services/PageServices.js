'use client'
import Typography from "@/common/Typography"
import { useRouter } from 'next/navigation'
import { Page } from "../pagestyle"
import { Button } from "@/common/MainStyle"
import { PageContainer, LeftSide, RightSide, HeadTitle, Title, Paragraph, ImageRightSide, ParagraphContainer,OverviewContainer, FeatureContainer, FeatureHeadTitle, FeatureCardContainer, ListContainer, ListItems } from  './PageServicesStyle'
import Cards from './PageCard'

export const metadata = {
    title: 'VFIX Communications Managed IT Services',
    description: 'Generated by create next app',
  }
  
export default function PageServices({data, SVGComponent }) {
    const { push } = useRouter()
    return (
        <Page>
            <PageContainer>
                <OverviewContainer>
                    <LeftSide>
                        <HeadTitle>
                            <Typography variant='h4'>
                                {data.Overview.headTitle}
                            </Typography>
                        </HeadTitle>
                        <Title>
                            <Typography variant='h2'>
                                {data.Overview.title}
                            </Typography>
                        </Title>
                        {data.Overview.list ? (
                            <ParagraphContainer>
                                {data.Overview.contents.map((text, index) => (
                                    <Paragraph key={index}>
                                        <Typography variant='body3'>
                                            {text.paragraph}
                                        </Typography>
                                    </Paragraph>
                                ))}
                            </ParagraphContainer>
                        ) : (
                            <ParagraphContainer>
                                {data.Overview.contents.map((text, index) => (
                                    <Paragraph key={index}>
                                        <Typography variant='body3'>
                                            {text.paragraph}
                                        </Typography>
                                    </Paragraph>
                                ))}
                            </ParagraphContainer>
                        )}
                        <ListContainer>
                            {data.Overview.list.map((item, index) => (
                                <ListItems key={index}>
                                    <Typography variant='body3'>
                                        {item}
                                    </Typography>
                                </ListItems>
                            ))}
                        </ListContainer>
                        <Button onClick={() => push('#contact-us')}>{data.Overview.button}</Button>
                    </LeftSide>
                    <RightSide>
                        {SVGComponent && <SVGComponent />}
                    </RightSide>
                </OverviewContainer>
                <FeatureContainer>
                    <FeatureHeadTitle>
                        <Typography variant='h2'>
                            {data.Overview.featureTitle}
                        </Typography>
                    </FeatureHeadTitle>
                    <FeatureCardContainer>
                        {data.Overview.features.map((card, index) => (
                            <Cards
                                key={index}
                                title={card.title}
                                content={card.paragraph}
                                urlImage={card.img}
                            />
                        ))}
                    </FeatureCardContainer>
                </FeatureContainer>
            </PageContainer>
        </Page>
    )
}