import Typography from "@/common/Typography"
import { Data } from "./Data"
import { Page } from "../../pagestyle"
import { Button } from "@/common/MainStyle"
import { PageContainer, LeftSide, RightSide, HeadTitle, Title, Paragraph, ImageRiteSide, ParagraphContainer,OverviewContainer, FeatureContainer, FeatureHeadTitle, FeatureCardContainer} from './PageStyle'
import Cards from './PageCard'


export const metadata = {
    title: 'DIRECT ROUTING FOR MICROSOFT TEAMS',
    description: 'Generated by create next app',
  }
  
export default function DirectRoutingMicrosoft() {
    return (
        <Page>
            <PageContainer>
                <OverviewContainer>
                    <LeftSide>
                        <HeadTitle>
                            <Typography variant='h5'>
                                {Data.Overview.headTitle}
                            </Typography>
                        </HeadTitle>
                        <Title>
                            <Typography variant='h2'>
                                {Data.Overview.title}
                            </Typography>
                        </Title>
                        <ParagraphContainer>
                            {
                                Data.Overview.contents.map((text, index) => (
                                    <Paragraph key={index}>
                                        <Typography variant='body4'>
                                            {text.paragraph}
                                        </Typography>
                                    </Paragraph>
                                ))
                            }
                        
                        </ParagraphContainer>
                        <Button>{Data.Overview.button}</Button>
                    </LeftSide>
                    <RightSide>
                        <ImageRiteSide src={Data.Overview.img} width={600} height={400} alt={Data.Overview.title}/>
                    </RightSide>
                </OverviewContainer>
                <FeatureContainer>
                            <FeatureHeadTitle>
                                <Typography variant='h2'>
                                    {Data.Overview.featureTitle}
                                </Typography>
                            </FeatureHeadTitle>
                            <FeatureCardContainer>
                                {
                                    Data.Overview.features.map((card, index) => (
                                        <Cards 
                                            key={index}
                                            title={card.title}
                                            content={card.paragraph}
                                            urlImage={card.img}
                                        />
                                    ))
                                }
                            </FeatureCardContainer>
                </FeatureContainer>
            </PageContainer>
        </Page>
    )
}