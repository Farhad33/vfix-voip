import Typography from '../Typography'
import { Data } from '../Data'
import IndustriesCard from './IndustriesCard'
import {IndustriesContainer, IndustriesHead, HeadTitle, HeadParagraph, IndustriesCardContainer} from './IndustriesStyle'


export default function Industries() {
    return (
        <IndustriesContainer>
            <IndustriesHead>
                <HeadTitle>
                    <Typography variant='h3' component='h3'>
                        {Data.IndustriesWeServe.headTitle}
                    </Typography>
                </HeadTitle>
                <HeadParagraph>
                    <Typography variant='p' component='body1'>
                        {Data.IndustriesWeServe.headContent}
                    </Typography>
                </HeadParagraph>
            </IndustriesHead>
            <IndustriesCardContainer>
                {Data.IndustriesWeServe.cards.map((card, index) => (
                    <IndustriesCard
                     key={index} 
                     title={card.title}
                     content={card.paragraph}
                     urlImage={card.img}
                     />
                ))}
            </IndustriesCardContainer>
        </IndustriesContainer>
    )
}