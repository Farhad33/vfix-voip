import Typography from '../Typography'
import { Data } from '../Data'
import ITConsultingCard from './ITConsultingCard'
import {ITConsultingContainer, ITConsultingHead, HeadTitle, HeadParagraph, ITConsultingCardContainer} from './ITConsultingStyle'


export default function ITConsulting() {
    return(
        <ITConsultingContainer>
            <ITConsultingHead>
                <Typography variant='h3'>
                    {Data.ITConsultingServices.headTitle}
                </Typography>
                <Typography variant='body3'>
                    {Data.ITConsultingServices.headContent}
                </Typography>
            </ITConsultingHead>
            <ITConsultingCardContainer>
                {Data.ITConsultingServices.cards.map((props, index) =>(
                    <ITConsultingCard key={index} {...props} />
                ))}
            </ITConsultingCardContainer>
        </ITConsultingContainer>
    )
}