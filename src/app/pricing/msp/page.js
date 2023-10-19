import { Page } from "@/app/pagestyle"
import { MSPContainer } from "./MSPStyle"
import ItMspConsulting from "./ITMSPConsulting"
import PricingFAQ from "../PricingFAQ" 
import { dataMSP } from "./dataMsp"

export default function MSP() {
    return(
        <Page>
            <MSPContainer>
                <ItMspConsulting />
                <PricingFAQ data={dataMSP} />
            </MSPContainer>
        </Page>
    )
}