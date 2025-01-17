'use client'
import { Theme } from "./Theme"
import styled from "styled-components"

export default function Typography({ variant , component, children, className, ...props }) { 
    return (
        <TypographyRoot
            as={component || Theme.typography.component[variant]}
            $variant={variant}
            className={className}
            {...props}
        >
            {children}
        </TypographyRoot>
    );
}

const TypographyRoot = styled.span`
  font-size: ${({$variant}) => Theme.typography.fontSize[$variant]};
  line-height: ${({$variant}) => Theme.typography.lineHeight[$variant]};
  font-weight: ${({$variant}) => Theme.typography.fontWeight[$variant]};
`