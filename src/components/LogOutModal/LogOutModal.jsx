import { BoxModal, ButtonBox, ButtonStyle, TextStyle } from './LogOutModal.stuled';

export const LogOutModal = ({question, butText, onClose, onLogout, marginR='auto' }) => {
  return (
    <BoxModal>
      <TextStyle>{question}</TextStyle>
      <ButtonBox>
        <ButtonStyle style={{ 
          marginRight: window.innerWidth >= 1440 ? marginR : 0
        }} type="button" onClick={onLogout}>
          {butText}
        </ButtonStyle>
        <ButtonStyle type="button" onClick={onClose}>
          Cancel
        </ButtonStyle>
      </ButtonBox>
    </BoxModal>
  );
};
