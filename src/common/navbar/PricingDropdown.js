'use client'
import styled, { css } from 'styled-components'
import { color } from "../Theme"
import { useRouter } from 'next/navigation'
import SVGComponents from "@/common/SVGComponents"

export default function PricingDropdown({ 
    item, 
    selectedMenu, 
    handleMenuClick, 
    isPricingDropdownOpen 
}) {
    const { push } = useRouter()
    const menuTitle = isPricingDropdownOpen ? item.title + ' ˄' : item.title + ' ˅'

    return <>
        <MenuTitle
            onClick={() => handleMenuClick('pricing') }
            $selectedMenu={selectedMenu}
        >
            {menuTitle}
        </MenuTitle>

        <DropdownContainer>
            <DropdownList $isDropdownOpen={isPricingDropdownOpen} >
                {item.dropdown.map(({ svg, title, route }, subIndex) => {
                    const SVGComponent = SVGComponents[svg]
                    return <PricingDropdownItem 
                        key={subIndex}
                        onClick={() => {
                            handleMenuClick('pricing-sub-dropdown')
                            push(route)
                        }}
                    >
                        <SVGComponent />
                        <MenuTitle>{title}</MenuTitle>
                    </PricingDropdownItem>
                })}
            </DropdownList>
        </DropdownContainer>
    </>
}

const PricingDropdownItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    svg {
        width: 60px;
    }
`
const selectedMenuCSS = css`
    background-image: linear-gradient(to right, ${color.Green200}, ${color.Blue200});
    background-clip: text;
    -webkit-background-clip: text; 
    color: transparent;
`
const MenuTitle = styled.span`
    ${({$selectedMenu}) => ($selectedMenu ? selectedMenuCSS : `color: ${color.Black};`)}
    &:hover {
        background-image: linear-gradient(to right, ${color.Green200}, ${color.Blue200});
        background-clip: text;
        -webkit-background-clip: text; 
        color: transparent; 
    }
    @media (max-width: 768px) {
        padding:10px 0 ; 
        font-size: 18px;
        ${({$selectedMenu}) => ($selectedMenu ? selectedMenuCSS : `color: ${color.White};`)}
    }
    @media (max-width: 640px) {
        padding: 5px 0;
    }
`
const DropdownList = styled.ul`
    display: ${({$isDropdownOpen}) => $isDropdownOpen ? 'flex' : 'none'};
    list-style: none;
    justify-content: center;
    align-items: center;
    position: absolute;
    background: ${color.White};
    box-shadow: 0px 6px 30px 5px ${color.Blue300};
    gap: 40px;
    margin-top: 15px;
    padding: 20px;
    z-index: 1;
    @media (max-width: 1000px) {
        left: 5px;
    }
    @media (max-width: 768px) {
        display: ${({$isDropdownOpen}) => $isDropdownOpen ? 'block' : 'none'};
        position: relative;
        box-shadow: unset;
        background: #00000000;
        gap: 0;
        left: 5px;
    }
    li {
        padding: calc(0.5vw + 8px) 0;
        align-self: flex-start;
    }
    span {
        margin-top: 10px;
    }
`
const DropdownContainer = styled.div`
    display: flex;
    justify-content: center;
`