import { Page } from "@/app/pagestyle"
import PricingFAQ from "../PricingFAQ" 
import { faqMSP, tablePricingData } from "./dataMsp"
import MSPTable from "./MSPTable"

export default function MSPPage() {
    return(
        <Page>
            <MSPTable tablePricingData={tablePricingData} />
            <PricingFAQ data={faqMSP} />
        </Page>
    )
}