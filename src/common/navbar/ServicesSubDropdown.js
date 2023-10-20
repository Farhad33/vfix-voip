import { SubDropDownContainer, SubDropDownList, SubDropDownLink, SubDropDownRoute, SubDropDownIcon} from './NavbarStyle'
export default function ServicesSubDropDown({ items }) {
  return(
    <SubDropDownContainer>
      <SubDropDownList>
        {
          items.map((item, index) => (
            <SubDropDownLink key={index}>
              <SubDropDownRoute href={item.route}>
                {
                  item.icon && ( 
                    <SubDropDownIcon src={item.icon} alt={item.title} width={17} height={17} />
                  )} 
                  {item.title}
              </SubDropDownRoute>
              {item.dropdown && (
                <ServicesSubDropDown item={item.dropdown} />
              )}
            </SubDropDownLink>
          ))
        }
      </SubDropDownList>
    </SubDropDownContainer>
  )
}