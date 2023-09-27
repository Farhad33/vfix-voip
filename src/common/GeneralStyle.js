'use client'
import { Theme } from './Theme';
import styled from 'styled-components';


export const TypographyRoot = styled.span`
  font-size: ${({$variant}) => Theme.typography.fontSize[$variant]};
  line-height: ${({$variant}) => Theme.typography.lineHeight[$variant]};
  font-weight: ${({$variant}) => Theme.typography.fontWeight[$variant]};
`
