import { Page } from "../../pagestyle"
import { Data } from "./PricingData"
import PricingFAQ from "../PricingFAQ"
import PricingPage from "./PricingPage"
import Typography from "@/common/Typography"
import { PricingTitle } from './PricingPageStyle'
import { dataVoip } from "./dataVoip"

export const metadata = {
    title: 'Affordable VoIP Solutions - VFIX Communications Pricing',
    description: 'Explore affordable VoIP solutions with VFIX Communications. Discover competitive pricing for high-quality VoIP services designed to enhance communication and productivity for businesses in the San Francisco Bay Area. Contact Us Today for a customized quote!',
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