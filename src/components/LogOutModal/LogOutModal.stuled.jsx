import styled from "styled-components";

export const BoxModal = styled.div`
  padding: 0 0 32px 0;
`;

export const TextStyle = styled.p`
  font-size: 18px;
  color: var(--primery-color-black);
  line-height: 20px;
  font-weight: 500;
  margin-bottom: 24px;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
  }
`;

export const ButtonStyle = styled.button`
  display: inline-block;
  width: 100%;
  padding: 8px 30px;
  color: #fff;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  background-color: var(--btn-color-red);
  box-shadow: 0 4px 8px rgba(64, 123, 255, 0.34);
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 14px rgba(64, 123, 255, 0.54);
  }
  &:active {
    box-shadow: none;
  }

  &:last-of-type {
    color: var(--primery-color-blue);
    background-color: var(--btn-color-light-blue);
  }

  @media screen and (min-width: 768px) {
    width: 160px;
    padding: 10px 30px;
  }
`;