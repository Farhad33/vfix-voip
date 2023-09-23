// import { Page } from './DownloadStyle'
import { Page } from '../pagestyle'
import Downloadcard from './Downloadcard'
import { cards } from './DownloadData'
import { DownloadContainer } from './DownloadStyle'


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



