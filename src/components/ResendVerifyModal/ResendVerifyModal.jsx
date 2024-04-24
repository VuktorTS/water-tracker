import { BoxModal, ButtonBox, ButtonStyle, TextStyle } from './ResendVerifyModal.styled';
import { useDispatch } from 'react-redux';
import { resendVerify } from '../../redux/auth/authOperations';

export const ResendVerifyModal = ({ question, butText, email }) => {
  const dispatch = useDispatch();

  const resendVer = () => {
    dispatch(resendVerify(email));
  };
  
  return (
    <BoxModal>
      <TextStyle>{question}</TextStyle>
      <ButtonBox>
        <ButtonStyle type="button" onClick={resendVer}>
          {butText}
        </ButtonStyle>
      </ButtonBox>
    </BoxModal>
  );
};