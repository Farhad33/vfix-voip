import { Theme } from './Theme';
import { ButtonComponent } from './GeneralStyle'


export default function Button({ variant, size, children }) {
  return (
    <ButtonComponent variant={variant} size={size} >
      {children}
    </ButtonComponent>
  );
}

