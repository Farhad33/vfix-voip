import { TypographyRoot } from "./GeneralStyle";
import { Theme } from "./Theme";

// eslint-disable-next-line react/prop-types
export default function Typography({ variant , component, children}) { 
    return (
        <TypographyRoot
            as={component || Theme.typography.component[variant]}
            variant={variant}
        >
            {children}
        </TypographyRoot>
    );
}

