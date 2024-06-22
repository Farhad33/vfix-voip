import {Page} from './pagestyle'
import Header from '@/common/header/Header'
import Success from '@/common/success/Success'
import Services from '@/common/services/Services'
import ItManaged from '@/common/itmanaged/ItManaged'
import ItServices from '@/common/itservices/ItServices'
import ITConsulting from '@/common/itconsulting/ITConsulting'
import Industries from '@/common/industries/Industries'
import PartnerWithVfix from '@/common/partnerwithvfix/PartnerWithVfix'

export const metadata = {
  title: 'VFIX Communications - Managed IT Services based in San Francisco Bay Area',
  description: 'VFIX Communications - Best Managed IT Services(MSP) based in San Francisco Bay Area. VFIX provide comprehensive IT support'+
  'cloud backup solutions, cybersecurity services and complince check such as HIPPA and PCI. Serving small businesses, healthcare, financial institutions'+
  'legal firms, and educational sectors with reliable, proactive IT solutions. Schedule a free IT assessment today!',
  keywords: 'Managed IT Services, IT Support Services, IT Solutions Provider, IT Managed Services, IT Support Company' +
  'IT Service Management, Managed IT Support, Cloud Backup Solutions, Cybersecurity Services, Network Security'+
  'IT Infrastructure Management, Cloud Computing Services, IT Consulting Services' +
  'IT Helpdesk Support, Disaster Recovery Planning, IT Services for Small Businesses, Enterprise IT Solutions'+
  'IT Support for Healthcare, IT Services for Financial Institutions, IT Support for Legal Firms, IT Services for Education'+
  'Cloud Backup for Businesses, Secure Cloud Storage, Data Backup Solutions, Business Continuity Planning'+
  'Remote Backup Services, Online Backup Solutions, Cybersecurity Solutions, Network Security Services, Threat Detection and Response'+
  'Endpoint Security, Security Monitoring Services, IT Compliance Services, Proactive IT Support, IT Asset Management'+
  'Virtual CIO Services, IT Project Management, Technology Consulting, Managed Network Services, Remote IT Support'+
  '24/7 IT Support Services, Book an IT Consultation, Schedule IT Services, Free IT Assessment, Custom IT Solutions'+
  'Affordable IT Services, Reliable IT Support, San Francisco Managed IT Services, San Francisco IT Support'+
  'San Francisco IT Solutions Provider, Local IT Services in San Francisco, IT Support Near Me in San Francisco'+
  'San Francisco Cybersecurity Services, VFIX Cloud Backup, Cloud Backup Provider, HIPPA Compliance IT Service Provider'+
  'Hotel WiFi Setup, Hotel Network Design and Implementation, Hotel IT service provider'

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
    </Page> 
    
  )
}

