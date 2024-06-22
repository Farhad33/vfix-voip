import { Data } from "./Data"
import PageServices from "../PageServices"
import SVGComponent from "./SVGComponent"

export const metadata = {
    title: 'Mobile and Desktop App for Business Communication Solutions - VFIX Communications',
    description: 'Streamline your business operations with VFIX Communications’ Mobile and Desktop App for Business Communication Solutions. Our apps offer seamless integration, real-time collaboration, and enhanced productivity for both mobile and desktop platforms. Comparable to leading providers like Microsoft, Slack, and Asana, VFIX Communications delivers tailored app solutions to meet your business needs. Contact Us Today for a customized solution!',
    keywords: 'mobile app solutions, desktop app solutions, business communication apps, real-time collaboration, enhanced productivity, Microsoft, Slack, Asana, VFIX Communications app solutions, mobile productivity apps, desktop productivity apps, enterprise app solutions, seamless integration, business collaboration tools, tailored app solutions, IT app services, app development, business software solutions, customized app solutions, digital transformation tools.'
  }
  
export default function MobileDesktopApp() {
    return <PageServices data={Data} SVGComponent={SVGComponent} />
}