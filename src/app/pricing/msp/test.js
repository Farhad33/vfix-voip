import React, { useState } from "react";
import Typography from "@/common/Typography";
import { CollapsibleContainer, ListContainer, ListTitle, ListContent, CollapsibleListContainer, HeadTitle, CollapsibleHead, HeadParagraph, Icons } from './PricingFAQStyle';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function CollapsibleList({ data }) {
    const [openIndex, setOpenIndex] = useState(null);

    const handelItemClick = (index) => {
        if (index === openIndex) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    }

    return (
        <CollapsibleContainer>
            <CollapsibleHead>
                <HeadTitle>
                    <Typography variant='h2' >
                        {data.frequentlyTitle}
                    </Typography>
                </HeadTitle>
                <HeadParagraph>
                    <Typography variant='body3'>
                        {data.frequentlyParagraph}
                    </Typography>
                </HeadParagraph>
            </CollapsibleHead>
            <CollapsibleListContainer>
                {data.map((item, index) => (
                    <ListContainer key={index}>
                        <ListTitle onClick={() => handelItemClick(index)}>
                            <Typography variant='h4'>
                                {item.title}
                            </Typography>
                            <Icons>
                                {index === openIndex ? <FiChevronUp /> : <FiChevronDown />}
                            </Icons>
                        </ListTitle>
                        {item.list ? (
                            <ListContent $isOpen={index === openIndex}>
                                <ul>
                                    {item.list.map((listItem, listIndex) => (
                                        <li key={listIndex}>
                                            {listItem}
                                        </li>
                                    ))}
                                </ul>
                            </ListContent>
                        ) : (
                            <ListContent $isOpen={index === openIndex}>
                                <Typography variant='body2'>
                                    {item.paragraph}
                                </Typography>
                            </ListContent>
                        )}
                    </ListContainer>
                ))}
            </CollapsibleListContainer>
        </CollapsibleContainer>
    );
}
