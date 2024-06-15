import {Page} from './pagestyle'
import Header from '@/common/header/Header'
import Success from '@/common/success/Success'
import Services from '@/common/services/Services'
import ItManaged from '@/common/itmanaged/ItManaged'
import ItServices from '@/common/itservices/ItServices'
// import ITConsulting from '@/common/itconsulting/ITConsulting'
// import Industries from '@/common/industries/Industries'
// import PartnerWithVfix from '@/common/partnerwithvfix/PartnerWithVfix'

export const metadata = {
  title: 'Vfix Viop',
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
      {/* <ITConsulting /> */}
      {/* <Industries /> */}
      {/* <PartnerWithVfix /> */}
    </Page> 
    
  )
}

