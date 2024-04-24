import styled from "styled-components";

export const BoxModal = styled.div`
  padding: 0 24px 32px 0;
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
  width: 100%;
  justify-content: center;
`;

export const ButtonStyle = styled.button`
  display: inline-block;
  width: calc(100%/2);
  padding: 8px 10px;
  color: var(--primery-color-blue);
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  background-color: var(--btn-color-light-blue);
  box-shadow: 0 4px 8px rgba(64, 123, 255, 0.34);
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 14px rgba(64, 123, 255, 0.54);
  }
  &:active {
    box-shadow: none;
  }

  @media screen and (min-width: 768px) {
    padding: 10px 10px;
  }
`;