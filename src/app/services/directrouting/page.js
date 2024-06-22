import { Data } from "./Data"
import PageServices from "../PageServices"
import SVGComponent from "./SVGComponent"

export const metadata = {
    title: 'Direct Routing Solutions for Microsoft Teams - VFIX Communications',
    description: 'Enhance your Microsoft Teams experience with VFIX Communications’ Direct Routing Solutions. Our services enable seamless integration, allowing businesses to make and receive calls directly within Teams. Comparable to top providers like AudioCodes, Ribbon Communications, and Oracle, VFIX Communications ensures reliable, scalable, and secure direct routing tailored to your business needs. Contact Us Today for a customized solution!',
    keywords: 'direct routing solutions, Microsoft Teams direct routing, seamless integration, AudioCodes, Ribbon Communications, Oracle, reliable direct routing, scalable direct routing, secure direct routing, business communication, Teams calling, enterprise direct routing, IT communication services, VFIX Communications direct routing, VoIP for Teams, unified communications, cloud telephony, enhance Microsoft Teams, direct routing provider, customized communication solutions.'

  }
  
export default function DirectRoutingMicrosoft() {
    return <PageServices data={Data} SVGComponent={SVGComponent} />
}