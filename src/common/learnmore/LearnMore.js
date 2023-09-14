import Typography from '../Typography'
import { Button } from '../MainStyle'
import { Data } from '../Data'
import Image from 'next/image'
import LearnMoreCard from './LearnMoreCard'
import {LearnMoreContainer, LearnMoreLeftSide, LeftSideTitle, LeftSideParagraph, LeftSideCardContainer, LearnMoreRightSide} from './LearnMoreStyle'

export default function LearnMore() {
    return(
        <LearnMoreContainer>
            <LearnMoreLeftSide>
                <LeftSideTitle>
                    <Typography variant='h2'>
                        {Data.learnMore.headTitle}
                    </Typography>
                </LeftSideTitle>
                <LeftSideParagraph>
                    <Typography variant='p'>
                        {Data.learnMore.headContent}
                    </Typography>
                </LeftSideParagraph>
                <LeftSideCardContainer>
                    {
                        Data.learnMore.cards.map((card, index) => (
                            <LearnMoreCard
                                key={index}
                                title={card.title}
                                content={card.paragraph}
                            />
                        ))
                    }
                </LeftSideCardContainer>
                <Button>{Data.learnMore.button}</Button>
            </LearnMoreLeftSide>
            <LearnMoreRightSide>
                <Image src={Data.learnMore.img} width={550} height={550}  alt={Data.learnMore.headTitle}/>
            </LearnMoreRightSide>
        </LearnMoreContainer>
    )
}