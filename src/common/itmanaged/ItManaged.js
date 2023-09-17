import {Container, Button} from '../MainStyle'
import Image from 'next/image'
import {ItManagedContainer, ItManagedLeftSide, ItManagedRightSide, LeftSideTitle, LeftSideParagraph} from './ItManagedStyle'
import Typography from '../Typography'
import { Data } from '../Data'

export default function ItManaged() {
    return (
        <Container>
            <ItManagedContainer>
                <ItManagedLeftSide>
                    <LeftSideTitle>
                        <Typography variant='h2'>{Data.itmanaged.title}</Typography>
                    </LeftSideTitle>
                    <LeftSideParagraph>
                        <Typography variant='body3'>{Data.itmanaged.paragraph}</Typography>
                    </LeftSideParagraph>
                    <Button>{Data.itmanaged.button}</Button>
                </ItManagedLeftSide>
                <ItManagedRightSide>
                    <Image src={Data.itmanaged.img} width={700} height={700} alt={Data.itmanaged.title} layout="responsive" />
                </ItManagedRightSide>
            </ItManagedContainer>
        </Container>
    )
}