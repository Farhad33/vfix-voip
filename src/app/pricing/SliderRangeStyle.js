import styled from "styled-components";
import { color } from "@/common/Theme";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  .MuiSlider-root {
    height: 15px;
    width: calc(42vw + 50px);
  }
  .MuiSlider-markLabel {
    color: ${color.Green200};
    margin-top: 20px;
    font-size: calc(0.5vw + 10px);
  }
  .MuiSlider-thumb {
    width: 43px;
    height: 43px;
  }
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    .MuiBox-root {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  @media (max-width: 500px) {
   
  }
`
export const SliderContainer = styled.div`
  width: 60%;
`
export const SwitchButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35%;
  `
export const SwitchButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 12px;
  width: 50%;
  
`
export const SwitchTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 40px;
`
export const Monthly = styled.div`
  color: ${color.Blue200};
`
export const Annually = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${color.Green200};
  h5 {
    color: ${color.Blue200};
  }
`