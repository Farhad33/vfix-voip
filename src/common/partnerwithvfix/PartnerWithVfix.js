import Typography from '../Typography'
import { Button } from '../MainStyle'
import { Data } from '../Data'
import {PartnerWithVfixContainer, PartnerWithVfixHead, HeadTitle, HeadParagraph, PartnerWithVfixContainerCard,PartnerWithVfixContactUs, ContactUsParagraph} from './PartnerWithVfixStyle'
import PartnerWithVfixCard from './PartnerWithVfixCard'

export default function PartnerWithVfix() {
    return (
        <PartnerWithVfixContainer>
            <PartnerWithVfixHead>
                <HeadTitle>
                    <Typography variant='h3'>
                        {Data.PartnerWithVfix.headTitle}
                    </Typography>
                </HeadTitle>
                <HeadParagraph>
                    <Typography variant='body2'>
                        {Data.PartnerWithVfix.headContent}
                    </Typography>
                </HeadParagraph>
            </PartnerWithVfixHead>
            <PartnerWithVfixContainerCard>
                {
                    Data.PartnerWithVfix.cards.map((card, index) => (
                        <PartnerWithVfixCard 
                            key={index}
                            title={card.title}
                            content={card.paragraph}
                            urlImage={card.img}
                        />
                    ))
                }
            </PartnerWithVfixContainerCard>
            <PartnerWithVfixContactUs>
                <ContactUsParagraph>
                    <Typography variant='overLine'>
                        {Data.PartnerWithVfix.contactUsText}
                    </Typography>
                </ContactUsParagraph>
                <Button>
                    <Typography variant='button'>
                        {Data.PartnerWithVfix.contactUsBtn}
                    </Typography>
                </Button>
            </PartnerWithVfixContactUs>
        </PartnerWithVfixContainer>
    )
}   