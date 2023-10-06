import Typography from "@/common/Typography"
import { Page } from "../pagestyle"
import { Data } from './Data'
import { LoginContainer, LoginHead, LoginCardContianer} from './pageStyle'
import Card from './LoginCard'


export default function Login() {
    return (
        <Page>
            <LoginContainer>
                <LoginHead>
                    <Typography variant='h2'>
                        {Data.title}
                    </Typography>
                </LoginHead>
                <LoginCardContianer>
                    {
                        Data.cards.map((card, index) => (
                            <Card 
                                key={index}
                                title={card.title}
                                urlImage={card.img}
                                btnText={card.buttonText}
                                url={card.url}
                            />
                        ))
                    }
                </LoginCardContianer>
            </LoginContainer>
        </Page>
    )
}