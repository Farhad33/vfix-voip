import TopSection from "./TopSection"
import MiddleSection from "./MiddleSection"
import Features from "./Features"

export const metadata = {
    title: 'Why Choose VFIX Communications - Your Trusted Managed IT Service Provider',
    description: 'Find out why VFIX Communications is the preferred Managed IT Service Provider for businesses in the San Francisco Bay Area. Explore our comprehensive IT services, innovative solutions, and dedication to excellence. Partner with VFIX for reliable, expert IT support that drives your business forward. Contact Us Today!',
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