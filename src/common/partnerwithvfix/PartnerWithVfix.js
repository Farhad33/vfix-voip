import Typography from '../Typography'
import { Button } from '../MainStyle'
import { Data } from '../Data'
import {PartnerWithVfixContainer, PartnerWithVfixHead, HeadTitle, HeadParagraph, PartnerWithVfixContainerCard,PartnerWithVfixContactUs, ContactUsParagraph} from './PartnerWithVfixStyle'
import PartnerWithVfixCard from './PartnerWithVfixCard'

export default function PartnerWithVfix() {
    return (
        <PartnerWithVfixContainer>
            <PartnerWithVfixHead>
                <Typography variant='h3'>
                    {Data.PartnerWithVfix.headTitle}
                </Typography>
                <Typography variant='body3'>
                    {Data.PartnerWithVfix.headContent}
                </Typography>
            </PartnerWithVfixHead>
            <PartnerWithVfixContainerCard>
                {Data.PartnerWithVfix.cards.map((card, index) => (
                    <PartnerWithVfixCard 
                        key={index}
                        title={card.title}
                        content={card.paragraph}
                        urlImage={card.img}
                    />
                ))}
            </PartnerWithVfixContainerCard>
        </PartnerWithVfixContainer>
    )
}   