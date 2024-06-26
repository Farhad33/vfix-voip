import { Data } from "./Data"
import PageServices from "../PageServices"
import SVGComponent from "./SVGComponent"

export const metadata = {
    title: 'Team & Web Collaboration Solutions - VFIX Communications',
    description: 'Enhance your team’s productivity with VFIX Communications’ Team Web Collaboration Solutions. Our services provide seamless, real-time collaboration tools, comparable to leading providers like Microsoft Teams, Zoom, and Slack. Improve communication, streamline workflows, and boost efficiency with our advanced web collaboration solutions. Contact Us Today for a customized solution!',
    keywords: 'Enhance your team’s productivity with VFIX Communications’ Team Web Collaboration Solutions. Our services provide seamless, real-time collaboration tools, comparable to leading providers like Microsoft Teams, Zoom, and Slack. Improve communication, streamline workflows, and boost efficiency with our advanced web collaboration solutions. Contact Us Today for a customized solution!'
  }
  
export default function TeamWebCollaboration() {
    return <PageServices data={Data} SVGComponent={SVGComponent} />
}