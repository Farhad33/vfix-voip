'use client'
import { Theme } from './Theme';
import styled from 'styled-components';

export const ButtonComponent = styled.button`
  color: ${({ variant }) => Theme.button[variant].color };
  height: 40px;
  background: linear-gradient(90deg, #00D59C 0%, #009CD5 100%);
  border-radius: 20px;
  border: none;
  cursor: pointer;
  `

  /* font-size: ${({ variant, Theme }) => Theme.typography.fontSize.button};
  font-weight: ${({ variant, Theme }) => Theme.typography.fontWeights.medium};
  width: ${({ size }) => Theme.button.size[size].width}; */
//   &:hover {
//     /* color: red; */
//     background: ${({ variant }) => Theme.button[variant]?.hover?.background};
//     /* background: red; */
//     transition: ${({ variant }) => Theme.button[variant]?.hover?.transition}; 
//   }