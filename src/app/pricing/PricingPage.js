"use client"
import { useState } from "react";
import { Data } from "./PricingData";
import PricinCard from "./PricingCard";
import SliderRange from './SliderRange'

import { PricingPageContainer, PricingCardContainer} from './PricingPageStyle'

export default function PricingPage() {
    const [contractLength, setContractLength] = useState('monthly')
    const [userQuantity, setUserQuantity] = useState(1)

    return(
        <PricingPageContainer>
            <SliderRange 
                setContractLength={setContractLength}
                setUserQuantity={setUserQuantity}
            />
            <PricingCardContainer>
                {
                    Data.cards.map((card, index) => (
                        <PricinCard 
                            key={index} 
                            title={card.title}
                            paragraph={card.content}
                            price={card.price[userQuantity][contractLength]}
                            discount_amount={card.price[userQuantity].discount_amount}
                            discount_percent={card.price[userQuantity].discount_percent}                            
                            captionBtn={card.button}
                            items={card.list}
                            contractLength={contractLength}
                        />
                    ))
                }
            </PricingCardContainer>
        </PricingPageContainer>
    )
}