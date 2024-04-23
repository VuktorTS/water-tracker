import ModalWrapper from '../ModalWrapper/ModalWrapper'; 
import TodayListModal from '../TodayListModal/TodayListModal.jsx';
import { useState } from 'react';
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
import { LogOutModal } from '../LogOutModal/LogOutModal.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodayWater } from '../../redux/water/waterSelectors.js';
import { formatTime } from '../../helpers/formatDate.js';
import { MODAL_TYPES } from '../../constants/addWater';

export const TodayWaterList = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
  const [idForDel, setIdForDel] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const waterList = useSelector(selectTodayWater);

  const onClose = () => {
    setModal(false);
    setSelectedItem(null);
  }
  const onOpen = (type, item) => {
    setModal(true);
    setModalType(type);
    setSelectedItem(item);
  };

  const onCloseDeleteModal = () => setDeleteModal(false);

  const onDelete = () => {
    dispatch(deleteWater(idForDel));
    onCloseDeleteModal();
  }

  const openDelMod = (id) => {
    setDeleteModal(true);
    setIdForDel(id);
  };


  return (
    <TodayContainer>
      <TodayTitle>Today</TodayTitle>
      <TodayList>
        {waterList.map((item) => (
          <TodayItem key={item._id}>
            <TodayInfo>
              <TodayClass>
                <use href={`${icons}#icon-glass`}></use>
              </TodayClass>
              <TodayValue>{`${item.waterVolume} ml`}</TodayValue>
              <TodayTime>{formatTime(item.time)}</TodayTime>
            </TodayInfo>
            <TodayTools>
              <ButtonEdit onClick={() => onOpen(MODAL_TYPES.EDIT, item)}>
                <svg>
                  <use href={`${icons}#icon-edit`}></use>
                </svg>
              </ButtonEdit>
              <ButtonDelete onClick={() => openDelMod(item._id)}>
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
        Add water
      </AddWaterBtn>
       {modal && modalType  === MODAL_TYPES.ADD && (
        <ModalWrapper onClose={onClose} title="Add water">
            <TodayListModal title={'Choose a value:'} onClose={onClose} waterList={waterList}></TodayListModal>
        </ModalWrapper>
      )}
      {modal && modalType  === MODAL_TYPES.EDIT && (
        <ModalWrapper onClose={onClose} title="Edit the entered amount of water">
            <TodayListModal title={'Correct entered data:'} onClose={onClose} data={selectedItem}></TodayListModal>
        </ModalWrapper>
      )}
      {deleteModal && <ModalWrapper onClose={onCloseDeleteModal} title="Delete entry" alignItems='center'><LogOutModal question="Are you sure you want to delete the entry?" butText="Delete" onClose={onCloseDeleteModal} onLogout={onDelete} marginR='0'/></ModalWrapper>}
    </TodayContainer>
  );
};
