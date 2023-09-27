import { Data } from "./PricingData";
import PricinCard from "./PricingCard";
import Typography from "@/common/Typography";
import { PricingPageContainer, PricingCardContainer} from './PricingPageStyle'

export default function PricingPage() {
    return(
        <PricingPageContainer>
            <PricingCardContainer>
                {
                    Data.cards.map((card, index) => (
                        <PricinCard 
                        key={index} 
                        title={card.title}
                        paragraph={card.content}
                        discount={card.discount}
                        annually={card.annually}
                        userMonth={card.userMonth}
                        captionBtn={card.button}
                        items={card.list}
                        save={card.save}
                        />
                    ))
                }
            </PricingCardContainer>
        </PricingPageContainer>
    )
}