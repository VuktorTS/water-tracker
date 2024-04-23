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
  z-index: 2;
`;

export const Container = styled.div`
  display: inline-block;
  width: 280px;
  margin: 20px 0;
  padding: 24px 12px;
  border-radius: 10px;
  background-color: var(--primery-color-white);
  position:relative;
  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 32px 24px;
  }
  @media screen and (min-width: 1440px) {
    width: 592px;
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
  font-family: var(--font-family);
`;
