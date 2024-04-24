import { BoxModal, ButtonBox, ButtonStyle, TextStyle } from './ResendVerifyModal.styled';

export const ResentVerifyModal = ({question, butText, onLogout }) => {
  return (
    <BoxModal>
      <TextStyle>{question}</TextStyle>
      <ButtonBox>
        <ButtonStyle type="button" onClick={onLogout}>
          {butText}
        </ButtonStyle>
      </ButtonBox>
    </BoxModal>
  );
};