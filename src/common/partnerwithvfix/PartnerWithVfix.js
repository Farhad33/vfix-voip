import Typography from '../Typography'
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
                {Data.PartnerWithVfix.cards.map(({ title, paragraph, Svg}, index) => (
                    <PartnerWithVfixCard 
                        key={index}
                        title={title}
                        content={paragraph}
                        Svg={Svg}
                    />
                ))}
            </PartnerWithVfixContainerCard>
        </PartnerWithVfixContainer>
    )
}   