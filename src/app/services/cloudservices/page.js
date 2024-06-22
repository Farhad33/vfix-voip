import { Data } from "./Data"
import PageServices from "../PageServices"
import SVGComponent from "./SVGComponent"

export const metadata = {
    title: 'Comprehensive Cloud Services, VFIX Cloud Backup - VFIX Communications',
    description: 'levate your business with VFIX Communications’ comprehensive Cloud Services. From scalable cloud infrastructure and storage solutions to secure cloud backup and disaster recovery, our services are designed to enhance productivity and ensure data integrity. Comparable to top providers like AWS, Microsoft Azure, and Google Cloud, VFIX Communications offers tailored cloud solutions to meet your unique business needs. Contact Us Today for a customized solution!',
    keywords: 'cloud services, cloud infrastructure, cloud storage, cloud backup, disaster recovery, AWS, Microsoft Azure, Google Cloud, secure cloud solutions, scalable cloud solutions, cloud computing, business cloud services, enterprise cloud solutions, IT cloud services, data integrity, digital transformation, cloud security, VFIX Communications cloud backup, reliable cloud services, cloud technology, tailored cloud solutions.'
  }
  
export default function CloudServices() {
    return <PageServices data={Data} SVGComponent={SVGComponent} />
}