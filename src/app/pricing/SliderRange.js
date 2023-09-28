"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';
import { Container,SwitchButton, SwitchTitle, Monthly, Annually } from './SliderRangeStyle'
import { Data } from './PricingData';
import Typography from '@/common/Typography';

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSliderMarks() {

    const [checked, setChecked] = React.useState(true);

    const handleChange2 = (event) => {
      setChecked(event.target.checked);
    };
    
    const handleChange = (event, newValue) => {
        console.log('newValue => ', newValue);
    };

    return (
      <Container component='div' style={{width: '100%', display: 'flex'}}>
        <Box sx={{ width: 300 }}>
          <Slider
              aria-label="Custom marks"
              defaultValue={1}
              getAriaValueText={valuetext}
              step={null}
              marks={Data.Silder.marks}
              valueLabelDisplay="auto"
              onChange={handleChange}
          />
        </Box>
        <SwitchButton>
          <Switch
            checked={checked}
            onChange={handleChange2}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <SwitchTitle>
            <Monthly>
              <Typography variant='h3'>
                {Data.Silder.monthly}
              </Typography>
            </Monthly>
            <Annually>
              <Typography variant='h3'>
                {Data.Silder.annually}
              </Typography>
              <Typography variant='h4'>
                {Data.Silder.upto}
              </Typography>
            </Annually>
          </SwitchTitle>
       `</SwitchButton>
      </Container>
    );
}


