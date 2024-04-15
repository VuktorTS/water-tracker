import ModalWrapper from '../components/ModalWrapper/ModalWrapper.jsx';
import AddWaterModal from '../components/AddWaterModal/AddWaterModal.jsx';
import React, { useState } from 'react';

const HomePage = () => {
        const [modal, setModal] = useState(false);
        const onClose = () => {
        setModal(false);
  };
        const onOpen = () => {
        setModal(true);
  };

    return (
        <div>Home page
            <button onClick={onOpen}>Add water</button>
      {modal && (
        <ModalWrapper onClose={onClose} title="Add water">
            <AddWaterModal></AddWaterModal>
        </ModalWrapper>
      )}
        </div>
  );
};

export default HomePage;