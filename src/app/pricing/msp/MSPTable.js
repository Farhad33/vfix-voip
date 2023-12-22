'use client'
import { useState, useRef, useEffect, Fragment } from 'react'
import styled, { css } from 'styled-components'

export default function MSPTable({ tablePricingData }) {

    return (
        <MSPContainer>
            {tablePricingData.map(({table, title}, index) => (
                <Fragment key={index}>
                <MainTitle>{title}</MainTitle>
                <TableWrapper>
                <Table key={index}>
                    <TableHead>
                        <TableRowHead>
                            {table.thead.map(({title, price, description}, index) => (
                                <TableHeader key={index}>
                                    <TableHeadTitle>{title}</TableHeadTitle>
                                    <TableHeadPrice>{price}</TableHeadPrice>
                                    <TableHeadDescription>{description}</TableHeadDescription>
                                </TableHeader>
                            ))}
                        </TableRowHead>
                    </TableHead>
                    <TableBody>
                        {table.tbody.map(({title, basic, advanced, premium}, index) => (
                            <TableRow key={index}>
                                <TableRowData>{title}</TableRowData>
                                <TableRowData><Circle $isChecked={basic} /></TableRowData>
                                {typeof advanced !== 'undefined' && <TableRowData><Circle $isChecked={advanced} /></TableRowData>}
                                {typeof premium !== 'undefined' && <TableRowData><Circle $isChecked={premium} /></TableRowData>}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                </TableWrapper>
                </Fragment>
            ))}
        </MSPContainer>
    )
}

const MSPContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`
const MainTitle = styled.h2`
    text-align: center;
    padding: 30px 0;
`
const TableWrapper = styled.div`
    width: 100%;
    margin: auto;
    @media (max-width: 768px) {
        position: relative;
        overflow: auto;
    }
`
const Table = styled.table`
    width: 80%;
    margin: auto;
    border-collapse: collapse;
    margin-bottom: 20px;
    background-color: #f4f4f4;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    border-radius: 10px;
    @media (max-width: 1100px) {
        width: 100%;
    }
    @media (max-width: 768px) {
        overflow-x: scroll;
        position: relative;
    }
`
const TableHead = styled.thead`
`
const TableBody = styled.tbody`
`
const TableRowHead = styled.tr``
const cell = css`
    padding: 15px;
    text-align: left;
    border-bottom: 1px solid #f2f2f2;
`
const TableHeader = styled.th`
    background: linear-gradient(90deg, #00d59c, #009cd5);
    color: #fff;
    font-weight: bold;
    ${cell}
    width: 100%;
    &:not(:first-child) {
        text-align: center;
    }
    &:first-child {
        border-radius: 10px 0 0 0;
    }
    &:last-child {
        border-radius: 0 10px 0 0;
    }

    @media (max-width: 768px) {
        &:first-child {
            position: sticky; 
            width: 150px;
            min-width: 150px;
            max-width: 150px;
            left: 0px;
        }
    }
`
const TableHeadTitle = styled.p`
    font-size: 22px;
    font-weight: 500;
    @media (max-width: 768px) {
        font-size: 16px;
        font-weight: 300;
        &:first-child {
        }
    }
`
const TableHeadPrice = styled.p`
    font-size: 22px;
    font-weight: 700;
    @media (max-width: 768px) {
        font-size: 16px;
        font-weight: 300;
    }
`
const TableHeadDescription = styled.p`
    font-size: 16px;
    font-weight: 400;
    @media (max-width: 768px) {
        font-size: 16px;
        font-weight: 300;
        &:first-child {
        }
    }
`
const TableRow = styled.tr`
    background-color: white;
    cursor: pointer;
    &:hover {
       background-color: #ececec;
       td {
           background-color: #ececec;
       }
    }
`
const TableRowData = styled.td`
    ${cell}
    &:first-child {
        position: sticky; 
        width: 150px;
        min-width: 150px;
        max-width: 150px;
        left: 0px;
        white-space: break-spaces;
        background-color: white;
    }
    @media (min-width: 1300px) {
        min-width: 180px;
    }
    @media (min-width: 1500px) {
        min-width: 250px;
    }
`
const Circle = styled.div`
    margin: auto;
    display: ${({$isChecked}) => ($isChecked? 'block' : 'none')};
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #00d59c;
    transition: all 0.3s ease;
    text-align: center;
    &:hover {
        background-color: #009cd5;
        transform: scale(1.3);
    }
`
