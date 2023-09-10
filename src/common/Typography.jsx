import styled from 'styled-components'
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

const TypographyRoot = styled.span`
    font-size: ${({variant}) => Theme.typography.fontSize[variant]};
    line-height: ${({variant}) => Theme.typography.lineHeight[variant]};
    font-weight: ${({variant}) => Theme.typography.fontWeights[variant]};
`