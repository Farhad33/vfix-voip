import { useState } from 'react'
import { LiItems, StyledLink, SpanLinks, SubLinkIcon, Ullink, UlContainer } from '../navbar/NavbarStyle';

export default function Dropdown({ item }) {
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
                    </LiItems>
                ))}
            </Ullink>
        </UlContainer>
    </>
}