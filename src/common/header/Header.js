import Image from 'next/image'
import {Container, Button} from '../MainStyle'
import {HeaderContainer, HeaderLeftSide, HeadTitle, Paragraph, HeaderRightSide} from '../header/HeaderStyle'
import Headerimg from '../photos/header.png'
import MainStyle from '../MainStyle'
import Typography from '../Typography'
import { Data } from '../Data'

export default function Header()  {
    return(
        <Container>
            <HeaderContainer>
                <HeaderLeftSide>
                    <HeadTitle>
                        <Typography variant='h2' component='h2'>{Data.header.title}</Typography>
                    </HeadTitle>
                    <Paragraph>
                        <Typography variant='p' component='body1'>{Data.header.paragraph}</Typography>
                    </Paragraph>
                    <Button>{Data.header.button}</Button>
                </HeaderLeftSide>
                <HeaderRightSide>
                    <Image src={Headerimg} alt='Man' width={700} />
                </HeaderRightSide>
            </HeaderContainer>
        </Container>
    )
}