import { useState } from "react";
import { BtnAddWater, EndMark, Icon, MiddleMark, RateContainer, StartMark, WaterRange, WaterRangeContainer, WaterRangeTitle, WaterRatioContainer } from "./WaterRatio.styled";
import icons from 'img/icons.svg';

export const WaterRatio = () => {

    // const dailyNorm = useSelector(отримати норму);
    const dailyNorm = 6000;

    // const dailyDrank = useSelector(отримати загальну випиту воду за день);
    const dailyDrank = 5500;

    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const waterPercent = Math.round((100 * dailyDrank) / dailyNorm);
  
    const getBackgroundSize = () => {
      if (Number.isNaN(waterPercent)) {
        return { backgroundSize: `${0}` };
      }
      return {
        backgroundSize: `${waterPercent}%`,
      };
    };
  
    const getPosition = () => {
        const limit = Math.min(100, Math.max(0, waterPercent));
        return {
          left: `calc(${limit}% + 3%)`,
        };
      };

      const isShow = waterPercent > 0 && waterPercent <= 100;
  return (
    <WaterRatioContainer>
      <WaterRangeContainer>
        <WaterRangeTitle>Today</WaterRangeTitle>
        <WaterRange
          type="range"
          value={Number.isNaN(waterPercent) ? `0` : waterPercent}
          readOnly={true}
          style={getBackgroundSize()}
          aria-label="Water range"
        />
        <RateContainer>
          <StartMark>0%</StartMark>
          {isShow && (
            <MiddleMark

              id="waterMark"
              style={getPosition()}
            >{`${waterPercent}%`}</MiddleMark>
          )}
          <EndMark>100%</EndMark>
        </RateContainer>
      </WaterRangeContainer>
      <BtnAddWater type="button" onClick={()=>{console.log("add water")}}>
        <Icon>
          <use href={`${icons}#icon-add-button`}></use>
        </Icon>
        add Water
      </BtnAddWater>
    </WaterRatioContainer>
  );
};
