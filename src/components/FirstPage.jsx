import styled from 'styled-components'
import vfixVoip from '../assets/VFix-Voip-homepage.svg'
import Button from '../components/common/Button'

export default function FirstPage() {
    return (
        <Container>
            <MainImage src={vfixVoip} />
            <ContactCenter>
                <ContactCenterTitle>CONTACT CENTER</ContactCenterTitle>
                <ContactCenterText>Talk to an expert</ContactCenterText>
                <ContactCenterButtonContainer>
                    <Button>Call</Button>
                    <Button>Chat</Button>
                </ContactCenterButtonContainer>
            </ContactCenter>
            <PhoneBusContianer>
                <PhoneBusTitle>PHONE SYSTEM</PhoneBusTitle>
                <PhoneBusText>Phone, SMS, Fax, Messaging, Video, webinar, more coming</PhoneBusText>
                <Button>Get Started</Button>
            </PhoneBusContianer>
        </Container>
    )
}

const Container = styled.div`

`
const ContactCenterTitle = styled.h3`
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
    color: #00AEEF;
`
const ContactCenterText = styled.p`
    font-weight: 300;
    font-size: 32px;
    line-height: 48px;
    color: #707070;
`
const ContactCenterButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const ContactCenter = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px;
    width: 275px;
`
const PhoneBusContianer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 50px;
    width: 420px;
`
const PhoneBusTitle = styled.h2`
    font-weight: 600;
    font-size: 40px;
    line-height: 60px;
    letter-spacing: 0.201em;
    background: linear-gradient(90deg,#27179B, #00AEEF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
const PhoneBusText = styled.p`
    font-weight: 300;
    font-size: 32px;
    line-height: 48px;
    color: #707070;
`
const MainImage = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
`