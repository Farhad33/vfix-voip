import { useState } from 'react'
import { ServicesDropdownItem, StyledLink, SpanLinks, DropdownList, DropdownContainer } from './NavbarStyle';
import ServicesSubDropDown from './ServicesSubDropdown';
import ServicesItConsulting from './ServicesITConsultingDropdown'


export default function ServicesDropdown({ item }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)


    return <>
        <StyledLink
            href={item.route}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)} 
        >
            <SpanLinks>{item.title}</SpanLinks>
        </StyledLink>
        <DropdownContainer>
            <DropdownList isDropdownOpen={isDropdownOpen}>
                {item.dropdown.map((subItem, subIndex) => (
                    <ServicesDropdownItem key={subIndex}>
                        <StyledLink 
                            href={subItem.route} 
                            onClick={() => setIsDropdownOpen(false)}
                        >
                            <SpanLinks>{subItem.title}</SpanLinks>
                        </StyledLink>
                        {subItem.dropdown && <ServicesSubDropDown items={subItem.dropdown} />}
                    </ServicesDropdownItem>
                ))}
                <ServicesItConsulting />
            </DropdownList>
        </DropdownContainer>
    </>
}