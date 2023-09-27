import Image from 'next/image'
import {Button} from '../MainStyle'
import {Container, HeaderContainer, HeaderLeftSide, HeadTitle, Paragraph, HeaderRightSide} from '../header/HeaderStyle'
import Typography from '../Typography'
import { Data } from '../Data'

export default function Header()  {
    return(
        <Container>
            <HeaderContainer>
                <HeaderLeftSide>
                    <HeadTitle>
                        <Typography variant='h2'>{Data.header.title}</Typography>
                    </HeadTitle>
                    <Paragraph>
                        <Typography variant='body3'>
                            {Data.header.paragraph}
                        </Typography>
                    </Paragraph>
                    <Button>{Data.header.button}</Button>
                </HeaderLeftSide>
                <HeaderRightSide>
                    <Image src={Data.header.img} alt={Data.header.alt} width={700} height={700} sizes='100vw' style={{width: '100%', height: 'auto'}} />
                </HeaderRightSide>
            </HeaderContainer>
        </Container>
    )
}