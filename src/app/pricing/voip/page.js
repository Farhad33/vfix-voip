import { Page } from "../../pagestyle"
import { Data } from "./PricingData"
import PricingFAQ from "../PricingFAQ"
import PricingPage from "./PricingPage"
import Typography from "@/common/Typography"
import { PricingTitle } from './PricingPageStyle'
import { dataVoip } from "./dataVoip"

export const metadata = {
    title: 'Business Communications',
    description: 'Business Communications',
  }

export default function BusinessCommunications() {
    return (
        <Page>
            <PricingTitle>
                <Typography variant='h2'>
                    {Data.pricingTitle}
                </Typography>
            </PricingTitle>
            <PricingPage />
            <PricingFAQ data={dataVoip} />
        </Page>
    )
}