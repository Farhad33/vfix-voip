import { Page } from "@/app/pagestyle"
import PricingFAQ from "../PricingFAQ" 
import { faqMSP, tablePricingData } from "./dataMsp"
import MSPTable from "./MSPTable"

export const metadata = {
    title: 'Managed IT Services Pricing - VFIX Communications',
    description: 'Discover transparent and competitive pricing for Managed IT Services at VFIX Communications. Our comprehensive IT solutions are tailored to meet the needs of businesses in the San Francisco Bay Area, ensuring optimal performance and security. Contact Us Today for a personalized quote!',
  }

export default function MSPPage() {
    return(
        <Page>
            <MSPTable tablePricingData={tablePricingData} />
            <PricingFAQ data={faqMSP} />
        </Page>
    )
}