import styled from 'styled-components';

export const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--backdrop-color);
  overflow-y: auto;
  z-index: 9999;
`;

export const Container = styled.div`
  display: inline-block;
  width: 280px;
  height: 816px;
  margin: 20px 0;
  padding: 24px 12px;
  border-radius: 10px;
  background-color: var(--primery-color-white);
  position:relative;
  box-sizing: content-box;
  @media screen and (min-width: 768px) {
    width: 704px;
    height: 696px;
    padding: 32px 24px;
  }
  @media screen and (min-width: 1440px) {
    width: 592px;
    height: 712px;
  }
`;
export const TitleModal = styled.h2`
  color: var(--primery-color-black);
  font-size: 26px;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 26px;
  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 28px;
  right: 12px;
  padding: 0;
  line-height: 0.6;
  color: var(--primery-color-blue);
  border: none;
  background: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    top: 36px;
    right: 24px;
  }
`;

export const CloseIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--primery-color-blue);

  &:hover,
  &:focus {
    stroke: var(--secondary-yellow);
  }
`;
export const ModalBody = styled.div`
  font-family: var(--font-family);`;




export const AllFormulesDiv = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
margin-bottom: 12px;
@media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`;

export const FormulesDiv = styled.div`
display: flex;
`;

export const Formule = styled.p`
  padding: 0;
  margin: 0;
  color: var(--primery-color-black);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.25;
`;

export const BodyFormules = styled.span`
  color: var(--primery-color-blue);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
`;

export const AdditInfo = styled.div`
  color: var(--primery-color-gray);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  border: 1px solid var(--btn-color-light-blue);
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 24px;
`;

export const PAdditInfo = styled.p`
padding: 0;
margin: 0;
`;

export const SpanAdditInfo = styled.span`
  color: var(--primery-color-blue);
`;

export const Form = styled.form`
`;

export const TitleForm = styled.h3`
  padding: 0;
  margin: 0;
  color: var(--primery-color-black);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  margin-bottom: 16px;
`;

export const RadioDiv = styled.div`
display: flex;
gap: 24px;
`;

export const InpDiv = styled.div`
display: flex;
flex-direction: column;
`;

export const Result = styled.div`
display: flex;
gap: 6px;
align-items: center;
margin: 0 0 24px 0;
`;

export const ValueResult = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.33;
  color: var(--primery-color-blue);
  min-width: 57px;
  height: 100%;
  padding: 0;
  margin: 0;
`;

export const DivButton = styled.div`
  width: 100%;
  display: flex;

  @media screen and (min-width: 768px) {
    justify-content: end;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 36px;
  border-radius: 6px;
  color: var(--primery-color-white);
  background-color: var(--primery-color-blue);
  margin: 24px 0;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;
    width: 160px;
    height: 44px;
  }

  &:hover{
    box-shadow: 0 2px 4px 0 rgba(64, 123, 255, 0.2);
  }
`;