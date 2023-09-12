import { Page } from './styled'
import Downloadcard from './Downloadcard'


export default function page ()  {
    const cards = [
            {
                title: 'Get VFIX Apps for Mobile and PC',
                paragraph1: 'Lorem ipsum dolor sit amet consectetur. Condimentum vitae nisi venenatis porttitor. Luctus fermentum urna ullamcorper morbi semper. Mauris pellentesque risus laoreet vitae dignissim tincidunt.',
                paragraph2: 'Lorem ipsum dolor sit amet consectetur. Condimentum vitae nisi venenatis porttitor. Luctus fermentum urna ullamcorper morbi semper. Mauris pellentesque risus laoreet vitae dignissim tincidunt.',
                button: 'Learn More' ,
                img: '/download/Group144.png',
                color: '#009CD5' 
            },
            {
                title: 'Get VFIX Apps for Mobile',
                paragraph1: 'Lorem ipsum dolor sit amet consectetur. Mauris mauris tellus amet nunc ac. Amet suspendisse augue in vitae suspendisse diam. At nec ut congue quis sem interdum ut ultrices.',
                paragraph2: 'Lorem ipsum dolor sit amet consectetur. Mauris mauris tellus amet nunc ac. Amet suspendisse augue in vitae suspendisse diam. At nec ut congue quis sem interdum ut ultrices.',
                button: 'Learn More' ,
                img: '/download/Group143_1.png',
                color: '#00D59C' 
            }
        ]
  return (
    <Page>
        <Downloadcard card={cards[0]}/>
        <Downloadcard card={cards[1]}/>
    </Page>
  )
}



