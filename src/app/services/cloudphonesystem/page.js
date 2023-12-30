import { Data } from "./Data"
import PageServices from "../PageServices"
import SVGComponent from "./SVGComponent"

export const metadata = {
    title: 'Cloud Phone Center',
    description: 'Cloud Phone Center',
  }
  
export default function CloudPhoneCenter() {
    return <PageServices data={Data} SVGComponent={SVGComponent} />
}