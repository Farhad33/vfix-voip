import { useState } from 'react'
import { LiItems, StyledLink, SpanLinks, SubLinkIcon, Ullink, UlContainer } from './NavbarStyle';
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
        <UlContainer>
            <Ullink style={{ display: isDropdownOpen ? 'flex' : 'none' }}>
                {item.dropdown.map((subItem, subIndex) => (
                    <LiItems key={subIndex}>
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
                    </LiItems>
                ))}
            </Ullink>
        </UlContainer>
    </>
}