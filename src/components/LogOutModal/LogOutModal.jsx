import { BoxModal, ButtonBox, ButtonStyle, TextStyle } from './LogOutModal.stuled';

export const LogOutModal = ({ onClose, onLogout }) => {
  return (
    <BoxModal>
      <TextStyle>Do you really want to leave?</TextStyle>
      <ButtonBox>
        <ButtonStyle type="button" onClick={onLogout}>
          logOut
        </ButtonStyle>
        <ButtonStyle type="button" onClick={onClose}>
          cancel
        </ButtonStyle>
      </ButtonBox>
    </BoxModal>
  );
};
