import {Button} from '../MainStyle'
import {Container, SuccessContainer, SuccessLeftSide, SuccessCenterSide, SuccessRightSide, SuccessTitle,TitleRightSide, ParagraphRightSide} from '../success/SuccessStyle'
import { Data } from '../Data'
import Typography from '../Typography'
import SuccessCard from './SuccessCard'
import { Paragraph } from '../header/HeaderStyle'


export default function Success() {
    return(
        <SuccessContainer>
            <SuccessLeftSide>
                {
                    Data.success.cards1.map(({ title, paragraph, Svg }, index) => (
                        <SuccessCard 
                            key={index}
                            title={title}
                            content={paragraph}
                            Svg={Svg}
                        />
                    ))
                }
            </SuccessLeftSide>
            <SuccessCenterSide>
                {
                    Data.success.cards2.map((card, index) => (
                        <SuccessCard 
                            key={index}
                            title={card.title}
                            content={card.paragraph}
                            Svg={card.Svg}
                        />
                    ))
                }
            </SuccessCenterSide>
            <SuccessRightSide>
                <SuccessTitle>
                    <TitleRightSide>
                        <Typography variant='h2'>
                            {Data.success.headTitle}
                        </Typography>
                    </TitleRightSide>
                    <ParagraphRightSide>
                        <Typography variant='body3'>
                            {Data.success.headContent}
                        </Typography>
                    </ParagraphRightSide>
                    <Button>{Data.success.button}</Button>
                </SuccessTitle>
            </SuccessRightSide>
        </SuccessContainer>
    )
}