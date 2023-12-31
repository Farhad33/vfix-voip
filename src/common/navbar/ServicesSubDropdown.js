'use client'
import styled from "styled-components";
import { color } from "../Theme"
import Image from "next/image";
import Typography from "../Typography";
import { useRouter } from 'next/navigation'

export default function ServicesSubDropDown({ items, handleMenuClick }) {
  const { push } = useRouter()

  return(
    <SubDropDownContainer>
      <SubDropDownList>
        {
          items.map(({ route, title, Svg}, index) => (
            <SubDropDownLink 
              key={index} 
              onClick={() => { 
                push(route) 
                handleMenuClick('services-sub-dropdown') 
              }}>
              <Svg />
              <Typography variant='subline2' >{title}</Typography>
            </SubDropDownLink>
          ))
        }
      </SubDropDownList>
    </SubDropDownContainer>
  )
}

export const SubDropDownContainer = styled.div``
export const SubDropDownList = styled.ul`
    list-style: none;
`
export const SubDropDownLink = styled.li`
  color: ${color.Black};
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:hover {
      background-image: linear-gradient(to right, ${color.Green200}, ${color.Blue200});
      background-clip: text;
      -webkit-background-clip: text; 
      color: transparent; 
  }
  @media (max-width: 768px) {
        color: ${color.White};
  }
  svg {
    width: 20px;
    margin-right: 10px;
  }
`
export const SubDropDownRoute = styled.a`
`
export const SubDropDownIcon = styled(Image)`
    margin-right: 10px;
`