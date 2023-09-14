import {Container, Button} from '../MainStyle'
import {SuccessContainer, SuccessLeftSide, SuccessCenterSide, SuccessRightSide, SuccessTitle} from '../success/SuccessStyle'
import { Data } from '../Data'
import Typography from '../Typography'
import SuccessCard from './SuccessCard'
import Success01 from '../photos/success01.png'
import Success02 from '../photos/success02.png'
import Success03 from '../photos/success03.png'
import Success04 from '../photos/success04.png'

export default function Success() {
    return(
        <Container>
            <SuccessContainer>
                <SuccessLeftSide>
                    <SuccessCard
                    title={Data.success.card1.title}
                    content={Data.success.card1.paragraph}
                    urlImage={Success01} />
                    <SuccessCard
                    title={Data.success.card2.title}
                    content={Data.success.card2.paragraph}
                    urlImage={Success02} />
                </SuccessLeftSide>
                <SuccessCenterSide>
                    <SuccessCard
                    title={Data.success.card3.title}
                    content={Data.success.card3.paragraph}
                    urlImage={Success03} />
                    <SuccessCard
                    title={Data.success.card4.title}
                    content={Data.success.card4.paragraph}
                    urlImage={Success04} />
                </SuccessCenterSide>
                <SuccessRightSide>
                    <SuccessTitle>
                        <Typography variant='h3'>Success With VFIX Communications</Typography>
                        <Typography variant='p'>
                            Unlock your business s potential for success with our comprehensive suite of services. From reliable IT management to cutting-edge cloud solutions and seamless communication, we provide the tools and expertise to drive your business forward. Partner with us today and experience the transformation that leads to unparalleled success.
                        </Typography>
                        <Button>Learn More</Button>
                    </SuccessTitle>
                </SuccessRightSide>
            </SuccessContainer>
        </Container>
    )
}