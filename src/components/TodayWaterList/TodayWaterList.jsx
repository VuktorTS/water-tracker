import ModalWrapper from '../ModalWrapper/ModalWrapper'; 
import TodayListModal from '../TodayListModal/TodayListModal.jsx';
import React, { useState } from 'react';
import {
  AddWaterBtn,
  ButtonDelete,
  ButtonEdit,
  TodayClass,
  TodayContainer,
  TodayInfo,
  TodayItem,
  TodayList,
  TodayTime,
  TodayTitle,
  TodayTools,
  TodayValue,
} from './TodayWaterList.styled';
import icons from 'img/icons.svg';


const waterList = [
  {
    id: 1,
    waterVolume: 100,
    time: '1:05 PM',
  },
  {
    id: 2,
    waterVolume: 150,
    time: '3:05 PM',
  },
  {
    id: 3,
    waterVolume: 300,
    time: '5:05 PM',
  },
  {
    id: 4,
    waterVolume: 250,
    time: '8:05 PM',
  },
  {
    id: 5,
    waterVolume: 250,
    time: '8:05 PM',
  },
];

const MODAL_TYPES = { ADD: "ADD", EDIT: "EDIT" };
const data = { date: '2024-04-20T10:21', waterVolume: 250, time: '2024-04-20T07:10:00.000Z', _id: '6623a80d55d991d499ce6e9' };

export const TodayWaterList = () => {
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState("");

  const onClose = () => {
    setModal(false);
 };
  const onOpen = (type) => {
    console.log(`open`);
    setModal(true);
    setModalType(type);
  };

  return (
    <TodayContainer>
      <TodayTitle>Today</TodayTitle>
      <TodayList>
        {waterList.map((item) => (
          <TodayItem key={item.id}>
            <TodayInfo>
              <TodayClass>
                <use href={`${icons}#icon-glass`}></use>
              </TodayClass>
              <TodayValue>{`${item.waterVolume} ml`}</TodayValue>
              <TodayTime>{item.time}</TodayTime>
            </TodayInfo>
            <TodayTools>
              <ButtonEdit onClick={() => onOpen(MODAL_TYPES.EDIT)}>
                <svg>
                  <use href={`${icons}#icon-edit`}></use>
                </svg>
              </ButtonEdit>
              <ButtonDelete onClick={() => console.log('delete')}>
                <svg>
                  <use href={`${icons}#icon-delete`}></use>
                </svg>
              </ButtonDelete>
            </TodayTools>
          </TodayItem>
        ))}
      </TodayList>
      <AddWaterBtn onClick={() => onOpen(MODAL_TYPES.ADD)}>
        <svg>
          <use href={`${icons}#icon-add`}></use>
        </svg>
        addWater
      </AddWaterBtn>
       {modal && modalType  === MODAL_TYPES.ADD && (
        <ModalWrapper onClose={onClose} title="Add water">
            <TodayListModal title={'Choose a value:'} onClose={onClose}></TodayListModal>
        </ModalWrapper>
      )}
      {modal && modalType  === MODAL_TYPES.EDIT && (
        <ModalWrapper onClose={onClose} title="Edit the entered amount of water">
            <TodayListModal title={'Correct entered data:'} onClose={onClose} data={data}></TodayListModal>
        </ModalWrapper>
      )}
    </TodayContainer>
  );
};
