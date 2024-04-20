import React, { useState } from 'react';

import ModalWrapper from '../ModalWrapper/ModalWrapper';
import AddWaterModal from '../AddWaterModal/AddWaterModal';

import {
  AddIcon,
  AddWaterButton,
  LeftMark,
  Mark,
  MarksContainer,
  RightMark,
  WaterRange,
  WaterRangeContainer,
  WaterRangeHeader,
  WaterRatioContainerOne,
} from './WaterRatioPanel.styled';

export const WaterRatioPanel = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  // const roundedWaterVolumePercentage = useSelector(selectWaterVolumePercentage);
  const roundedWaterVolumePercentage = 20;
  // Тут треба видалити рядок вище...............................................................................................

  const getMarkPosition = () => {
    const limitedPercentage = Math.min(
      100,
      Math.max(0, roundedWaterVolumePercentage)
    );
    return {
      left: `calc(${limitedPercentage}% + 4px)`,
    };
  };

  const getBackgroundSize = () => {
    return {
      backgroundSize: `${roundedWaterVolumePercentage}%`,
    };
  };

  const showMarkLabel =
    roundedWaterVolumePercentage > 0 && roundedWaterVolumePercentage < 100;

  return (
    <WaterRatioContainerOne>
      <WaterRangeContainer>
        <WaterRangeHeader>Today</WaterRangeHeader>
        <WaterRange
          type="range"
          maxValue={100}
          minValue={0}
          value={roundedWaterVolumePercentage}
          readOnly={true}
          style={getBackgroundSize()}
          aria-label="Water range"
        />
        <MarksContainer>
          <LeftMark>0%</LeftMark>
          {showMarkLabel && (
            <Mark
              id="waterMark"
              style={getMarkPosition()}
            >{`${roundedWaterVolumePercentage}%`}</Mark>
          )}
          <RightMark>100%</RightMark>
        </MarksContainer>
      </WaterRangeContainer>
      <AddWaterButton onClick={() => setModalOpen(true)}>
        <AddIcon>
          <use href="../../img/icons.svg#icon-add"></use>
        </AddIcon>
        Add Water
      </AddWaterButton>

      {isModalOpen && (
        <ModalWrapper onClose={() => setModalOpen(false)} title="Add water">
          <AddWaterModal></AddWaterModal>
        </ModalWrapper>
      )}
    </WaterRatioContainerOne>
  );
};
