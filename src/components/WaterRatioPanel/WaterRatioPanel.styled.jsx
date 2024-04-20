import styled from 'styled-components';

export const WaterRatioContainerOne = styled.div`
  width: 280px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    width: 704px;
    gap: 24px;
    flex-direction: row;
    align-items: center;
  }

  @media screen and (min-width: 1440px) {
    width: 592px;
    gap: 32px;
  }
`;

export const WaterRange = styled.input`
  &[type='range'] {
    appearance: none;
    width: 100%;
    border-radius: 10px;
    background-color: rgb(158, 187, 255);
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
    background: rgb(255, 255, 255);
    border: solid 1px rgb(64, 123, 255);
    -webkit-appearance: none;
    margin-top: -4px;
  }
`;

export const WaterRangeHeader = styled.p`
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 16px;
  color: rgb(64, 123, 255);
`;
export const WaterRangeContainer = styled.div`
  position: relative;
  height: 102px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    width: 356px;
    height: 90px;
  }
`;

export const MarksContainer = styled.div`
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Mark = styled.span`
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
  color: rgb(64, 123, 255);

  &::before {
    content: '|';
    justify-content: center;
    align-items: center;
    color: 1px solid rgb(215, 227, 255);
  }
`;

export const LeftMark = styled.span`
  transform: translateX(-50%);
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: rgb(64, 123, 255);

  &::before {
    content: '|';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    color: 1px solid rgb(215, 227, 255);
  }
`;

export const RightMark = styled.span`
  transform: translateX(50%);
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color: rgb(64, 123, 255);

  &::before {
    content: '|';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: 1px solid rgb(215, 227, 255);
  }
`;

export const AddWaterButton = styled.button`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 6px 76px 6px 76px;
  background-color: rgb(64, 123, 255);
  color: #fff;
  border: none;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  &:hover {
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    padding: 10px 104px 10px 104px;
  }

  @media screen and (min-width: 1440px) {
    width: 178px;
    height: 44px;
    padding: 10px 30px 10px 30px;
  }
`;

export const AddIcon = styled.svg`
  width: 24px;
  height: 24px;
  fill: transparent;
  stroke: #fff;
`;
