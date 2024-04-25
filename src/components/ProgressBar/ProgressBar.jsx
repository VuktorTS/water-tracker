import { useState } from 'react';
import {
  BtnAddWater,
  EndMark,
  Icon,
  MiddleMark,
  RateContainer,
  Ruler,
  StartMark,
  WaterRange,
  WaterRangeContainer,
  WaterRangeTitle,
  WaterRatioContainer,
} from './ProgressBar.styled';
import icons from 'img/icons.svg';
import ModalWrapper from '../ModalWrapper/ModalWrapper';
import TodayListModal from '../TodayListModal/TodayListModal';
import { useSelector } from 'react-redux';
import {
  selectDailyWaterNorm,
  selectWaterPercentage,
} from '../../redux/water/waterSelectors';
import { selectTodayWater } from '../../redux/water/waterSelectors';

export const ProgressBar = () => {
  const [modal, setModal] = useState(false);
  const waterList = useSelector(selectTodayWater);

  const onClose = () => {
    setModal(false);
  };
  const onOpen = (type) => {
    setModal(true);
  };

  const waterPercent = useSelector(selectWaterPercentage);

  const getBackgroundSize = () => {
    if (Number.isNaN(waterPercent)) {
      return { backgroundSize: `${0}` };
    }
    return {
      backgroundSize: `${waterPercent}%`,
    };
  };
  return (
    <>
      <WaterRatioContainer>
        <WaterRangeContainer>
          <WaterRangeTitle>Today</WaterRangeTitle>
          <WaterRange
            type="range"
            value={waterPercent}
            readOnly={true}
            style={getBackgroundSize()}
            aria-label="Water range"
          />
          <RateContainer>
            <StartMark><Ruler>|</Ruler>0%</StartMark>
            <MiddleMark className={waterPercent >= 50 && waterPercent < 100 ? "progress" : ""}><Ruler>|</Ruler> 50%</MiddleMark>
            <EndMark className={waterPercent >= 100 ? "progress" : ""}><Ruler>|</Ruler>100%</EndMark>
          </RateContainer>
        </WaterRangeContainer>
        <BtnAddWater type="button" onClick={() => onOpen()}>
          <Icon>
            <use href={`${icons}#icon-add-button`}></use>
          </Icon>
          Add water
        </BtnAddWater>
      </WaterRatioContainer>
      {modal && (
        <ModalWrapper onClose={onClose} title="Add water">
          <TodayListModal
            title={'Choose a value:'}
            onClose={onClose}
            waterList={waterList}
          ></TodayListModal>
        </ModalWrapper>
      )}
    </>
  );
};
