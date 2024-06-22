import { Data } from "./Data"
import PageServices from "../PageServices"
import SVGComponent from "./SVGComponent";

export const metadata = {
    title: 'Business Messaging Solutions - VFIX Communications',
    description: 'Enhance your business communication with VFIX Communications’ Business Messaging Solutions. Our services offer seamless integration, real-time messaging, and reliable performance, comparable to top providers like RingCentral and Nextiva. Improve collaboration, streamline operations, and drive productivity with our advanced messaging solutions. Contact Us Today for a tailored solution!',
    keywords: 'business messaging, VoIP messaging, RingCentral, Nextiva, 8x8, real-time messaging, integrated communication, productivity tools, business communication solutions, unified communications, hosted PBX, VoIP services, cloud communication, enterprise messaging, business collaboration, IT communication services, digital transformation, efficient messaging solutions, scalable communication tools'
}
  
export default function BusinessMessaging() {
    return <PageServices data={Data} SVGComponent={SVGComponent} />
}