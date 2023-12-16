import { useState } from 'react'
import { PricingDropdownItem, StyledLink, SpanLinks, SubLinkIcon, DropdownList, DropdownContainer } from './NavbarStyle';
import SubDropDown from './ServicesSubDropdown';


export default function PricingDropdown({ item }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)


    return <>
        <StyledLink
            href={item.route}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
        >
            <SpanLinks>{item.title}</SpanLinks>
        </StyledLink>
        <DropdownContainer>
            <DropdownList $isDropdownOpen={isDropdownOpen} >
                {item.dropdown.map((subItem, subIndex) => (
                    <PricingDropdownItem key={subIndex}>
                        <StyledLink 
                            href={subItem.route} 
                            onClick={() => setIsDropdownOpen(false)}
                        >
                            <SubLinkIcon 
                                width={50} 
                                height={50} 
                                src={subItem.icon} 
                                alt={subItem.title} 
                            />
                            <SpanLinks>{subItem.title}</SpanLinks>
                        </StyledLink>
                        {subItem.dropdown && <SubDropDown items={subItem.dropdown} /> }
                    </PricingDropdownItem>
                ))}
            </DropdownList>
        </DropdownContainer>
    </>
}