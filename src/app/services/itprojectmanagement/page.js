import { Data } from "./Data"
import PageServices from "../PageServices"
import SVGComponent from "./SVGComponent"

export const metadata = {
    title: 'IT Project Management Services - VFIX Communications',
    description: 'Streamline your IT projects with VFIX Communications’ expert IT Project Management Services. Our PMP® certified professionals manage every aspect of your IT projects, ensuring they are delivered on time, within budget, and aligned with your business goals. Contact Us Today for a customized consultation!',
    keywords:'IT project management, PMP® certified, IT project planning, IT project execution, IT project monitoring, IT project completion, VFIX Communications project management, tailored IT solutions, business IT projects, enterprise project management, IT consulting, project delivery, IT strategy alignment, customized project management services.'
  }
  
export default function SoftwareHardware() {
    return <PageServices data={Data} SVGComponent={SVGComponent} />
}