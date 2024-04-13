import styled from "styled-components";

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--backdrop-color);
  `
  
  export const Container = styled.div`
    position: absolute;
    width: 280px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 32px 24px;
    border-radius: 10px;
    background-color: var(--primery-color-white);
      @media screen and (min-width: 768px) {
          width: 529px;
      }
  `
  export const TitleModal = styled.h2`
  color: var(--primery-color-black);
font-size: 26px;
font-weight: 500;
line-height: 1.2;
margin-bottom: 24px;
  `

  export const ButtonClose = styled.button`
    position: absolute;
    top: 26px;
    right: 20px;
    padding: 8px 0;
    font-size: 28px;
    line-height: 0.6;
    color: var(--primery-color-blue);
    border: none;
    background: none;
    cursor: pointer;
  `
  export const ModalBody = styled.div``
 