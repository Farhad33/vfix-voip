'use client'
import styled from "styled-components";
import { Theme } from "./Theme";

export const Container = styled.div`
  
`

export const Button = styled.button`
  background: linear-gradient(90deg, #00D59C 0%, #009CD5 100%);
  border: none;
  border-radius: 20px;
  height: 40px;
  font-size: ${({variant}) => Theme.typography.fontSize.button};
  padding: 0 25px;
  color: #FFFFFF;
  &:hover {
    background: #000000;
    transition: 0.7s;
    
  }
`