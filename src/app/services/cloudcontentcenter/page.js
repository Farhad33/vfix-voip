import { Data } from "./Data"
import PageServices from "../PageServices"
import SVGComponent from "./SVGComponent"

export const metadata = {
    title: 'Cloud Contact Center Solutions - VFIX Communications',
    description: 'Transform your customer service with VFIX Communications’ Cloud Contact Center Solutions. Our services provide scalable, reliable, and feature-rich contact center solutions, rivaling top providers like Genesys, Five9, and Talkdesk. Enhance customer interactions, streamline operations, and drive business growth with our advanced cloud contact center services. Contact Us Today for a customized solution!',
    keywords: 'cloud contact center, Genesys, Five9, Talkdesk, customer service solutions, scalable contact center, reliable contact center, feature-rich contact center, customer interactions, business growth, cloud-based contact center, virtual call center, omnichannel support, customer experience management, IT communication services, digital transformation, advanced contact center solutions, contact center integration, seamless customer service, enterprise contact center solutions.'
  }
  
export default function CloudContentCenter() {
    return <PageServices data={Data} SVGComponent={SVGComponent} />
}