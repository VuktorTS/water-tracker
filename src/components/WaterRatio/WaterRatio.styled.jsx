import styled from "styled-components";

export const WaterRatioContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 15px;

  @media screen and (min-width: 768px) {
    width: 704px;
    gap: 24px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    gap: 32px;
  }
`
export const WaterRangeContainer = styled.div`
position: relative;
height: 102px;
display: flex;
flex-direction: column;

@media screen and (min-width: 768px) {
  width: 356px;
  height: 90px;
}
`
export const WaterRangeTitle = styled.h3`
font-size: 18px;
line-height: 0.75;
text-align: left;
font-weight: 400;
margin-bottom: 11px;
color: #407bff;
`
export const WaterRange = styled.input`
padding: 0 13px;
&[type='range'] {
    appearance: none;
    width: 256px;
    margin: 0 auto;
    border-radius: 10px;
    background-color: #d7e3ff;
    background-image: linear-gradient(to right, #9ebbff, #9ebbff);
    background-repeat: no-repeat;
  }

  &[type='range']:focus {
    outline: none;
  }

  &[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 8px;
    animation: 0.2s;
    border-radius: 10px;
    -webkit-appearance: none;
    box-shadow: none;
    border: none;
    background: transparent;
  }

  &[type='range']::-webkit-slider-thumb {
    height: 14px;
    width: 14px;
    border-radius: 50%;
    background: #ffffff;
    border: solid 1px #407bff;
    -webkit-appearance: none;
    margin-top: -4px;
  }
`
export const RateContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`
export const StartMark = styled.span`
transform: translateX(-50%);
font-size: 12px;
line-height: 16px;
letter-spacing: 0em;
text-align: center;
color: #407bff;

&::before {
  content: '|';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: #9ebbff;
}
`
export const MiddleMark = styled.span`
position: absolute;
transform: translateX(-50%);
display: flex;
flex-direction: column;
font-size: 16px;
font-weight: 500;
line-height: 20px;
text-align: center;
margin-bottom: 4px;
gap: 4px;
color: #407bff;

&::before {
  content: '|';
  justify-content: center;
  align-items: center;
  color: #9ebbff;
}
`
export const EndMark = styled.span`
transform: translateX(50%);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: #407bff;

  &::before {
    content: '|';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #9ebbff;
  }
`
export const BtnAddWater = styled.button`
display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 6px 72px;
  background-color: #407bff;
  color: #fff;
  border: none;
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
  transition: box-shadow 0.3s ease;

  &:hover {
   box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    padding: 10px 75px;
  }

  @media screen and (min-width: 1440px) {
    width: 178px;
    height: 44px;
    padding: 10px 20px;
  }
`
export const Icon = styled.svg`
width: 24px;
height: 24px;
fill: transparent;
stroke: #ffffff;
`
export const l = styled.div`

`