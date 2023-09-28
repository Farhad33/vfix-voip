import { Page } from "../pagestyle"
import FAQ from "./PricingFAQ"
import PricingPage from "./PricingPage"

export const metadata = {
    title: 'Pricing',
    description: 'Generated by create next app',
  }

export default function Pricing() {
    return (
        <Page>
            <h1>Pricing</h1>
            <PricingPage />
            <FAQ />
        </Page>
    )
}