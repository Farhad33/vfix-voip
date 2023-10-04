"use client"
import * as React from 'react';
import styled from "styled-components";
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';
import { Container,SwitchButton, SwitchTitle, Monthly, Annually, SwitchButtonContainer, SliderContainer } from './SliderRangeStyle'
import { Data } from './PricingData';
import Typography from '@/common/Typography';
import { color } from '@/common/Theme'



function valuetext(value) {
  return `${value}°C`;
}

export default function SliderRange({ setUserQuantity, setContractLength }) {

    const [checked, setChecked] = React.useState(false);

    const handleSwitchChange = (event) => {
      setChecked(event.target.checked);
      if(event.target.checked) {
        setContractLength('annually')
      } else {
        setContractLength('monthly')
      }
    };
    
    const handleSliderChange = (event, newValue) => {
        setUserQuantity(newValue)
    };

    return (
      <Container>
        <SliderContainer>
          <Slider
              defaultValue={1}
              getAriaValueText={valuetext}
              step={null}
              marks={Data.Silder.marks}
              onChange={handleSliderChange}
          />
        </SliderContainer>
        <SwitchButtonContainer>
          <SwitchButton>
            {
              checked ?
                <GreenSwitch
                  checked={checked}
                  onChange={handleSwitchChange}
                  inputProps={{ 'aria-label': 'controlled' }}
                  size='large'
                />
                :
                <BlueSwitch
                  checked={checked}
                  onChange={handleSwitchChange}
                  inputProps={{ 'aria-label': 'controlled' }}
                  size='large'
                />
            }
          </SwitchButton>
          <SwitchTitle>
            <Monthly>
              <Typography variant='h4'>
                {Data.Silder.monthly}
              </Typography>
            </Monthly>
            <Annually>
              <Typography variant='h4'>
                {Data.Silder.annually}
              </Typography>
              <Typography variant='h5'>
                {Data.Silder.upto}
              </Typography>
            </Annually>
          </SwitchTitle>
        </SwitchButtonContainer>
      </Container>
    );
}

const GreenSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: color.Green100,
    '&:hover': {
      backgroundColor: '#00d59c68',
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: color.Green100,
  },
}));

const BlueSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase': {
    color: color.Blue200,
    '&:hover': {
      backgroundColor: '#009cd575',
    },
  },
  '& .MuiSwitch-switchBase + .MuiSwitch-track': {
    backgroundColor: color.Blue200,
  },
}));