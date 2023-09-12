import {Container, Button} from '../MainStyle'
import { Data } from '../Data'
import Typography from '../Typography'
import {ServicesContainer, ServicesTitle, ServicesCardContainer} from './ServicesStyle'
import ServicesCard from './ServicesCard'
import Services01 from '../photos/view01.png'
import Services02 from '../photos/view02.png'
import Services03 from '../photos/view03.png'
import Services04 from '../photos/view04.png'
import Services05 from '../photos/view05.png'

export default function Services() {
    return (
        <Container>
            <ServicesContainer>
                <ServicesTitle>
                    <Typography variant='h2' component='h2'>{Data.services.headTitle}</Typography>
                </ServicesTitle>
                <ServicesCardContainer>
                    {
                        Data.services.cards.map((card, index) => (
                            <ServicesCard 
                            key={card.index}
                            title={card.title} 
                            content={card.paragraph} 
                            urlImage={Services01}  
                            />
                        )
                        )
                        
                    }
                    {/* <ServicesCard 
                        title={Data.services.card1.title} 
                        content={Data.services.card1.paragraph} 
                        urlImage={Services01} 
                    />
                    <ServicesCard 
                        title={Data.services.card2.title} 
                        content={Data.services.card2.paragraph} 
                        urlImage={Services02} 
                    />
                    <ServicesCard 
                        title={Data.services.card3.title} 
                        content={Data.services.card3.paragraph} 
                        urlImage={Services03} 
                    />
                    <ServicesCard 
                        title={Data.services.card4.title} 
                        content={Data.services.card4.paragraph} 
                        urlImage={Services04} 
                    />
                    <ServicesCard 
                        title={Data.services.card5.title} 
                        content={Data.services.card5.paragraph} 
                        urlImage={Services05} 
                    />  */}
                </ServicesCardContainer>
            </ServicesContainer>
        </Container>
    )
}