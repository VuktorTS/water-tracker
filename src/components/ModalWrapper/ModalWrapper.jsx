import { useLockBodyScroll } from 'react-use';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ButtonClose, Container, ModalBody } from './ModalWrapper.styled';

const modalRoot = document.querySelector('#modal');

const ModalWrapper = ({ onClose, children }) => {
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
        <ButtonClose
          type="button"
          onClick={onClose}
          aria-label="Close"
        >x
          {/* <ImgCloseModal
           src={icon}
           alt="Close Button" /> */}
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