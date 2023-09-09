'use client'
import styled from 'styled-components'


export const Container = styled.div`
  width:100% ;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px;
`
export const Button = styled.button`
    width: 100px;
    height: 40px;
    background:red;
    color: white;
`

export const Title = styled.h1`
    font-size: 40px;
    color: green;
    font-weight: 600;
    line-height: 2px;
`

export const Paragraph = styled.p`
    color: blue;
    font-size: 30px;
    line-height: 3px;
    font-weight: 500;
`