import Image from "next/image";
import { SubDropDownContainer, SubDropDownList, SubDropDownLink, SubDropDownRoute, SubDropDownIcon} from './NavbarStyle'
export default function SubDropDown({ items }) {
  return(
    <SubDropDownContainer>
      <SubDropDownList>
        {
          items.map((item, index) => (
            <SubDropDownLink key={index}>
              <SubDropDownRoute hred={item.route}>
                {
                  item.icon && ( 
                    <SubDropDownIcon src={item.icon} alt={item.title} width={17} height={17} />
                  )} 
                  {item.title}
              </SubDropDownRoute>
              {item.dropdown && (
                <SubDropDown item={item.dropdown} />
              )}
            </SubDropDownLink>
          ))
        }
      </SubDropDownList>
    </SubDropDownContainer>
  )
}