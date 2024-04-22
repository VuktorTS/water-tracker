import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--backdrop-color);
  overflow: 'auto';
  z-index: 2;
`;

export const Container = styled.div`
  position: absolute;
  width: 280px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 24px 12px;
  border-radius: 10px;
  background-color: var(--primery-color-white);
  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 32px 24px;
  }
  @media screen and (min-width: 1440px) {
    width: 592px;
  }
`;

export const TitleBox = styled.div`
display: flex;
-webkit-box-pack: justify;
justify-content: space-between;
margin-bottom: 24px;
`;


export const TitleModal = styled.h2`
  color: var(--primery-color-black);
  font-size: 26px;
  font-weight: 500;
  line-height: 1.2;

`;

export const ButtonClose = styled.button`
  // position: absolute;
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
