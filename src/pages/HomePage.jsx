import ModalWrapper from '../components/ModalWrapper/ModalWrapper.jsx';
import AddWaterModal from '../components/AddWaterModal/AddWaterModal.jsx';
import React, { useState } from 'react';
import { Button } from '../pages/HomePage.styled.jsx';
import { DailyNorma } from '../components/DailyNorma/DailyNorma.jsx';

const HomePage = () => {
  const [modal, setModal] = useState(false);
  const onClose = () => {
    setModal(false);
  };
  const onOpen = () => {
    setModal(true);
  };

  return (
    <div>
      <DailyNorma />
      <Button onClick={onOpen}>Add water</Button>
      {modal && (
        <ModalWrapper onClose={onClose} title="Add water">
          <AddWaterModal></AddWaterModal>
        </ModalWrapper>
      )}
    </div>
  );
};

export default HomePage;
