// import { Page } from './DownloadStyle'
import { Page } from '../pagestyle'
import Downloadcard from './Downloadcard'
import { cards } from './DownloadData'
import { DownloadContainer } from './DownloadStyle'

export const metadata = {
  title: 'Get VFIX Apps for Mac, PC, and Mobile Devices - VFIX Communications',
  description: 'Download the MaX UC application to use all the features of your CommPortal account. Sync contacts, manage voicemails, and control your telephony services with VFIX Apps for Mac, PC, and mobile devices. Enjoy high-quality audio, real-time presence, and the flexibility to switch calls between devices seamlessly.',
}
export default function Downloads()  {
    
  return (
    <Page>
      <DownloadContainer>
        <Downloadcard card={cards[0]}/>
        <Downloadcard card={cards[1]}/>
      </DownloadContainer>
    </Page>
  )
}



