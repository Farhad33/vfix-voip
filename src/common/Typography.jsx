import { TypographyRoot } from "./GeneralStyle";
import { Theme } from "./Theme";

export default function Typography({ variant , component, children}) { 
    return (
        <TypographyRoot
            as={component || Theme.typography.component[variant]}
            $variant={variant}
        >
            {children}
        </TypographyRoot>
    );
}

