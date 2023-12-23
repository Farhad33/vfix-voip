import { Button } from '../MainStyle'
import {ItManagedContainer, ItManagedLeftSide, ItManagedRightSide, LeftSideTitle, LeftSideParagraph} from './ItManagedStyle'
import Typography from '../Typography'
import { Data } from '../Data'
import ItManagedSVG from './ItManagedSVG'

export default function ItManaged() {
    return (
        <ItManagedContainer>
            <ItManagedLeftSide>
                <LeftSideTitle>
                    <Typography variant='h2'>{Data.itmanaged.title}XXX</Typography>
                </LeftSideTitle>
                <LeftSideParagraph>
                    <Typography variant='body3'>{Data.itmanaged.paragraph}</Typography>
                </LeftSideParagraph>
                <Button>{Data.itmanaged.button}</Button>
            </ItManagedLeftSide>
            <ItManagedRightSide>
                <ItManagedSVG alt="svg" />
            </ItManagedRightSide>
        </ItManagedContainer>
    )
}