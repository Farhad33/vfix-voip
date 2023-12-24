import TopSection from "./TopSection"
import MiddleSection from "./MiddleSection"
import Features from "./Features"

export const metadata = {
    title: 'Why Vfix',
    description: 'Why Vfix',
  }

export default function WhyVfix(){
    return(
        <div>
            <TopSection />
            <MiddleSection />
            <Features />
        </div>
    )

}