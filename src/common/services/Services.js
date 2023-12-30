import { Data } from '../Data'
import Typography from '../Typography'
import {ServicesContainer, ServicesTitle, ServicesCardContainer} from './ServicesStyle'
import ServicesCard from './ServicesCard'


export default function Services() {
    return (
        <ServicesContainer>
            <ServicesTitle>
                <Typography variant='h2'>{Data.services.headTitle}</Typography>
            </ServicesTitle>
            <ServicesCardContainer>
                {
                    Data.services.cards.map(({ title, paragraph, Svg}, index) => (
                        <ServicesCard 
                            key={index}
                            title={title} 
                            content={paragraph} 
                            Svg={Svg}  
                        />
                    )
                    )
                }
            </ServicesCardContainer>
        </ServicesContainer>
    )
}