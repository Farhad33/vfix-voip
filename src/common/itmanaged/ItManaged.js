import {Container, Button} from '../MainStyle'
import Image from 'next/image'
import {ItManagedContainer, ItManagedLeftSide, ItManagedRightSide, LeftSideTitle, LeftSideParagraph} from './ItManagedStyle'
import Typography from '../Typography'
import { Data } from '../Data'
import ITManaged from '../photos/IT-Managed.png'

export default function ItManaged() {
    return (
        <Container>
            <ItManagedContainer>
                <ItManagedLeftSide>
                    <LeftSideTitle>
                        <Typography variant='h2'>{Data.itmanaged.title}</Typography>
                    </LeftSideTitle>
                    <LeftSideParagraph>
                        <Typography variant='p'>{Data.itmanaged.paragraph}</Typography>
                    </LeftSideParagraph>
                    <Button>{Data.itmanaged.button}</Button>
                </ItManagedLeftSide>
                <ItManagedRightSide>
                    <Image src={ITManaged} width={600} height={600} alt={Data.itmanaged.title} />
                </ItManagedRightSide>
            </ItManagedContainer>
        </Container>
    )
}