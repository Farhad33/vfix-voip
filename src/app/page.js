import Typography from '@/common/Typography'
import {Page, Title, Paragraph, Button, Section} from './pagestyle'
import Header from '@/common/header/Header'
import Success from '@/common/success/Success'
import Services from '@/common/services/Services'
import ItManaged from '@/common/itmanaged/ItManaged'
import ItServices from '@/common/itservices/ItServices'
import ITConsulting from '@/common/itconsulting/ITConsulting'
import Industries from '@/common/industries/Industries'
import PartnerWithVfix from '@/common/partnerwithvfix/PartnerWithVfix'
import LearnMore from '@/common/learnmore/LearnMore'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


export default function Home() {
  return (
    <Page >
      <Header />
      <Success />
      <Services />
      <ItManaged />
      <ItServices />
      <ITConsulting />
      <Industries />
      <PartnerWithVfix />
      <LearnMore />
    </Page> 
    
  )
}

