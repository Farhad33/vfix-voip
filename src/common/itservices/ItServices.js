import {Container} from '../MainStyle'
import Typography from '../Typography'
import { Data } from '../Data'
import {ItServicesContainer, ItServicesHead, ItServicesCardContainer, HeadTitle, HeadParagraph} from './ItServicesStyle'
import ItServicesCard from './ItServicesCard'

export default function ItServices() {
    return(
        <Container>
            <ItServicesContainer>
                <ItServicesHead>
                    <HeadTitle>
                        <Typography variant='h3'>
                            {Data.ITManagedServices.headTitle}
                        </Typography>
                    </HeadTitle>
                    <HeadParagraph>
                        <Typography variant='subline4'>
                            {Data.ITManagedServices.headContent}
                        </Typography>
                    </HeadParagraph>
                </ItServicesHead>
                <ItServicesCardContainer>
                    {
                        Data.ITManagedServices.cards.map((card, index) => (
                            <ItServicesCard 
                                key={index}
                                title={card.title}
                                content={card.paragraph}
                                urlImage={card.img}
                                btnText={card.button}
                            />
                        ))
                    }
                </ItServicesCardContainer>
            </ItServicesContainer>
        </Container>
    )
}