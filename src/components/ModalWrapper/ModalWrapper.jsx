import { useLockBodyScroll } from 'react-use';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ButtonClose, CloseIcon, Container, ModalBody, TitleModal } from './ModalWrapper.styled';
import icons from "img/icons.svg"

const modalRoot = document.querySelector('#modal');

const ModalWrapper = ({ onClose, children, title }) => {
  useLockBodyScroll(true);

  useEffect(() => {
    const onEscPress = e => {
      if (e.code === 'Escape')  onClose();
    };

    window.addEventListener('keydown', onEscPress);

    return () => {
      window.removeEventListener('keydown', onEscPress);
    };
  }, [onClose]);

  const handleClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleClick}>
      <Container>
        <TitleModal>{title}</TitleModal>
        <ButtonClose
          type="button"
          onClick={onClose}
          aria-label="Close"
        >
            <CloseIcon>
              <use href={`${icons}#icon-outline`}></use>
            </CloseIcon>
        </ButtonClose>
        <ModalBody>
          {children}
        </ModalBody>
      </Container>
    </Backdrop>,
    modalRoot,
  );
};

export default ModalWrapper;