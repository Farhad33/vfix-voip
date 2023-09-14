import {Container, Button} from '../MainStyle'
import { Data } from '../Data'
import Typography from '../Typography'
import {ServicesContainer, ServicesTitle, ServicesCardContainer} from './ServicesStyle'
import ServicesCard from './ServicesCard'


export default function Services() {
    return (
        <Container>
            <ServicesContainer>
                <ServicesTitle>
                    <Typography variant='h2'>{Data.services.headTitle}</Typography>
                </ServicesTitle>
                <ServicesCardContainer>
                    {
                        Data.services.cards.map((card, index) => (
                            <ServicesCard 
                            key={card.index}
                            title={card.title} 
                            content={card.paragraph} 
                            urlImage={card.img}  
                            />
                        )
                        )
                    }
                </ServicesCardContainer>
            </ServicesContainer>
        </Container>
    )
}