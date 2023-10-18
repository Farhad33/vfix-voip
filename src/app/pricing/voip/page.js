import { Page } from "../../pagestyle"
import { Data } from "./PricingData"
import FAQ from "../PricingFAQ"
import PricingPage from "./PricingPage"
import Typography from "@/common/Typography"
import { PricingTitle } from './PricingPageStyle'

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
            <FAQ />
        </Page>
    )
}