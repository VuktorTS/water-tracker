// Сторінка з прикладом використання обгортки для модалок
// Пропсами передаємо функцію закриття модалки і заголовок

import { useState } from 'react';
import ModalWrapper from '../components/ModalWrapper/ModalWrapper';
import { LogOutModal } from '../components/LogOutModal/LogOutModal';
import { ButtonStyle } from '../components/LogOutModal/LogOutModal.stuled';
import { logOut } from '../redux/auth/authOperations';
import { useDispatch } from 'react-redux';

const ModalPage = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const onClose = () => {
    setModal(false);
  };
  const onOpen = () => {
    setModal(true);
  };
  const onLogout = ()=>{
    dispatch(logOut());
    onClose();
  }

  return (
    <>
      <ButtonStyle onClick={onOpen}>Log out</ButtonStyle>
      {modal && (
        <ModalWrapper onClose={onClose} title="Log out">
          <LogOutModal onClose={onClose} onLogout={onLogout}/>
        </ModalWrapper>
      )}
    </>
  );
};
export default ModalPage;
