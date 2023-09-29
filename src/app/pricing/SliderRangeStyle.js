import styled from "styled-components";
import { color } from "@/common/Theme";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  .MuiSlider-root {
    height: 15px;
    width: 600px;
  }
  .MuiSlider-markLabel {
    color: ${color.Green200};
    margin-top: 20px;
  }
  @media (max-width: 1000px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    .MuiSlider-root {
      width: 400px;
    }
    .MuiBox-root {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  @media (max-width: 500px) {
    .MuiSlider-root {
      width: 270px;
    }
  }
`

export const SwitchButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const SwitchTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 15px;
`
export const Monthly = styled.div`
  color: ${color.Blue200};
`
export const Annually = styled.div`
  color: ${color.Green200};
  h5 {
    color: ${color.Blue200};
  }
`