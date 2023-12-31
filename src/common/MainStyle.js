'use client'
import styled from "styled-components";
import { Theme } from "./Theme";
import { color } from "./Theme";


export const Button = styled.button`
  background: linear-gradient(90deg, ${color.Green200} 0%, ${color.Blue200} 100%);
  border: none;
  border-radius: 20px;
  height: 40px;
  font-size: ${({ variant }) => Theme.typography.fontSize.button};
  padding: 0 calc(1vw + 20px);
  color: ${color.White};
  cursor: pointer;
  &:hover {
    background: ${color.Black};
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`

export const PagePaddingWrapper = styled.div`
    padding: 0 5%;
`