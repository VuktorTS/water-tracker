import ModalWrapper from '../components/ModalWrapper/ModalWrapper';
import TodayListModal from '../components/TodayListModal/TodayListModal.jsx';
import { useState } from 'react';
import { BackgroundContainer } from './HomePage.styled.jsx';

const MODAL_TYPES = { ADD: 'ADD', EDIT: 'EDIT' };
const data = { time: '07:15 AM', ml: 250, id: 9843576 };

const HomePage = () => {
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState('');

  const onClose = () => {
    setModal(false);
  };
  const onOpen = (type) => {
    setModal(true);
    setModalType(type);
  };

  return (
    <>
      <BackgroundContainer>
        <div>Home Page</div>
        <button onClick={() => onOpen(MODAL_TYPES.ADD)}>Add water</button>
        <button onClick={() => onOpen(MODAL_TYPES.EDIT)}>Edit</button>
        {modal && modalType === MODAL_TYPES.ADD && (
          <ModalWrapper onClose={onClose} title="Add water">
            <TodayListModal
              title={'Choose a value:'}
              onClose={onClose}
            ></TodayListModal>
          </ModalWrapper>
        )}
        {modal && modalType === MODAL_TYPES.EDIT && (
          <ModalWrapper
            onClose={onClose}
            title="Edit the entered amount of water"
          >
            <TodayListModal
              title={'Correct entered data:'}
              onClose={onClose}
              data={data}
            ></TodayListModal>
          </ModalWrapper>
        )}
      </BackgroundContainer>
    </>
  );
};

export default HomePage;
