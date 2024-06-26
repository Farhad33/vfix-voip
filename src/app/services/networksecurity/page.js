import { Data } from "./Data"
import PageServices from "../PageServices"
import SVGComponent from "./SVGComponent"

export const metadata = {
    title: 'Advanced Network Security and Compliance Solutions - VFIX Communications',
    description: 'Protect your business with VFIX Communications’ Advanced Network Security and Compliance Solutions. Our services offer comprehensive protection against cyber threats and ensure compliance with standards like HIPAA, PCI, and more. Comparable to top providers like Palo Alto Networks, Fortinet, and Cisco, VFIX Communications delivers tailored security solutions to meet your business needs. Contact Us Today for robust network security and compliance!',
    keywords: 'network security solutions, advanced network security, cyber threat protection, compliance solutions, HIPAA compliance, PCI compliance, Palo Alto Networks, Fortinet, Cisco, comprehensive network protection, VFIX Communications security, tailored security solutions, business network security, enterprise network protection, IT security services, cybersecurity solutions, secure network, data protection, cyber defense, network integrity, robust security solutions, customized security services, network threat management, regulatory compliance.'
  }
  
export default function NetworkSecurity() {
    return <PageServices data={Data} SVGComponent={SVGComponent} />
}