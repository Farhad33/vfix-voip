import { useState } from 'react'
import { LiItems, StyledLink, SpanLinks, SubLinkIcon, Ullink, UlContainer } from './NavbarStyle';
import ServicesSubDropDown from './ServicesSubDropdown';


export default function ServicesDropdown({ item }) {
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
                            <SpanLinks>{subItem.title}</SpanLinks>
                        </StyledLink>
                        {subItem.dropdown && <ServicesSubDropDown items={subItem.dropdown} /> }
                    </LiItems>
                ))}
            </Ullink>
        </UlContainer>
    </>
}