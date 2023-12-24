import { Data } from "./Data"
import PageServices from "../PageServices"

export const metadata = {
    title: 'Cloud Phone Center',
    description: 'Cloud Phone Center',
  }
  
export default function CloudPhoneCenter({data}) {
    return (
        <>
            <PageServices data={Data} />
        </>
    )
}