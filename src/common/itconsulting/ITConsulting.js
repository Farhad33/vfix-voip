import Typography from '../Typography'
import { Data } from '../Data'
import ITConsultingCard from './ITConsultingCard'
import {ITConsultingContainer, ITConsultingHead, HeadTitle, HeadParagraph, ITConsultingCardContainer} from './ITConsultingStyle'


export default function ITConsulting() {
    return(
        <ITConsultingContainer>
            <ITConsultingHead>
                <HeadTitle>
                    <Typography variant='h3'>
                        {Data.ITConsultingServices.headTitle}
                    </Typography>
                </HeadTitle>
                <HeadParagraph>
                    <Typography variant='subline3'>
                        {Data.ITConsultingServices.headContent}
                    </Typography>
                </HeadParagraph>
            </ITConsultingHead>
            <ITConsultingCardContainer>
                {
                    Data.ITConsultingServices.cards.map((card, index) =>(
                        <ITConsultingCard
                            key={index} 
                            title={card.title}
                            content={card.paragraph}
                            urlImage={card.img}
                        />
                    ))
                }
            </ITConsultingCardContainer>
        </ITConsultingContainer>
    )
}