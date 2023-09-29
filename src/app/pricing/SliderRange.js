"use client"
import * as React from 'react';
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';
import { Container,SwitchButton, SwitchTitle, Monthly, Annually, SwitchButtonContainer, SliderContainer } from './SliderRangeStyle'
import { Data } from './PricingData';
import Typography from '@/common/Typography';




function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSliderMarks({ setUserQuantity, setContractLength }) {

    const [checked, setChecked] = React.useState(true);

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
              valueLabelDisplay="auto"
              onChange={handleSliderChange}
          />
        </SliderContainer>
        <SwitchButtonContainer>
          <SwitchButton>
            <Switch
              checked={checked}
              onChange={handleSwitchChange}
              inputProps={{ 'aria-label': 'controlled' }}
              color={ setContractLength('annually') === 'annually' ? 'warning' : 'success'}
            />
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

