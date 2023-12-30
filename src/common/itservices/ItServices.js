import Typography from '../Typography'
import { Data } from '../Data'
import {ItServicesContainer, ItServicesHead, ItServicesCardContainer } from './ItServicesStyle'
import ItServicesCard from './ItServicesCard'

export default function ItServices() {
    return(
        <ItServicesContainer>
            <ItServicesHead>
                <Typography variant='h3'>
                    {Data.ITManagedServices.headTitle}
                </Typography>
                <Typography variant='body3'>
                    {Data.ITManagedServices.headContent}
                </Typography>
            </ItServicesHead>
            <ItServicesCardContainer>
                {
                    Data.ITManagedServices.cards.map(({ Svg, title, paragraph, button, btnUrl}, index) => (
                        <ItServicesCard 
                            key={index}
                            title={title}
                            content={paragraph}
                            Svg={Svg}
                            btnText={button}
                            btnUrl={btnUrl}
                        />
                    ))
                }
            </ItServicesCardContainer>
        </ItServicesContainer>
    )
}