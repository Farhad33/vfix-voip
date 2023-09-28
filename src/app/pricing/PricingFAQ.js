'use client'
import Typography from "@/common/Typography"
import { CollapsibleContainer, ListContainer, ListTitle, ListContent, CollapsibleListContainer, HeadTitle, CollapsibleHead, HeadParagraph, Icons} from './PricingFAQStyle'
import { Data } from "./PricingData"
import { useState } from "react"
import {FiChevronDown, FiChevronUp} from "react-icons/fi"



export default function CollapsibleList (){
    const [openIndex, setOpenIndex] = useState(null)

    const handelItemClick = (index) => {
        if ( index === openIndex) {
            setOpenIndex(null)
        } else {
            setOpenIndex(index)
        }
    }

    return (
            <CollapsibleContainer>
                <CollapsibleHead>
                    <HeadTitle>
                        <Typography $variant='h2' >
                            {Data.frequentlyTitle}
                        </Typography>
                    </HeadTitle>
                    <HeadParagraph>
                        <Typography $variant='body3'>
                            {Data.frequentlyParagraph}
                        </Typography>
                    </HeadParagraph>
                </CollapsibleHead>
                <CollapsibleListContainer>
                    {Data.CollapsibleList.map((item, index) => (
                        <ListContainer key={index}>
                            <ListTitle onClick={ () => handelItemClick(index)}>
                                <Typography $variant='h4'>
                                    {item.title}
                                    
                                </Typography>
                                <Icons>
                                {index === openIndex ? <FiChevronUp /> : <FiChevronDown />}
                                </Icons>
                            </ListTitle>
                            <ListContent $isOpen= {index === openIndex}>
                                <Typography $variant='body2'>
                                    {item.content}
                                </Typography>
                            </ListContent>
                        </ListContainer>
                    ))}
                </CollapsibleListContainer>
            </CollapsibleContainer>
    )
}