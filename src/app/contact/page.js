"use client"

import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
  {
    value: 1,
    label: '1-4',
  },
  {
    value: 20,
    label: '5-20',
  },
  {
    value: 37,
    label: '21-100',
  },
  {
    value: 100,
    label: '100+',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSliderMarks() {

    const handleChange = (event, newValue) => {
        console.log('newValue => ', newValue);
    };

    return (
        <Box sx={{ width: 300 }}>
        <Slider
            aria-label="Custom marks"
            defaultValue={1}
            getAriaValueText={valuetext}
            step={null}
            marks={marks}
            valueLabelDisplay="auto"
            onChange={handleChange}
        />
        </Box>
    );
}
