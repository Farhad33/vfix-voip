import { Data } from "./Data"
import PageServices from "../PageServices"
import SVGComponent from "./SVGComponent"

export const metadata = {
    title: 'Cloud and VoIP Phone System Solutions - VFIX Communications',
    description: 'Upgrade your business communication with VFIX Communications’ Cloud Phone System Solutions. Our services offer reliable, scalable, and feature-rich Voice over IP (VoIP) phone systems, comparable to top providers like RingCentral, Vonage, and 8x8. Improve connectivity, streamline operations, and enhance productivity with our advanced cloud phone systems. Contact Us Today for a customized solution!',
    keywords: 'cloud phone system, VoIP phone system, Voice over IP, RingCentral, Vonage, 8x8, business phone solutions, scalable phone systems, reliable VoIP, feature-rich phone systems, business communication, cloud-based phone systems, enterprise VoIP, hosted PBX, unified communications, IT communication services, digital transformation, advanced phone solutions, seamless connectivity, productivity tools, business telephony, cloud communication tools.'
  }
  
export default function CloudPhoneCenter() {
    return <PageServices data={Data} SVGComponent={SVGComponent} />
}