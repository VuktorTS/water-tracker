import styled from 'styled-components';

export const PopupElement = styled.div`
  border-radius: 10px;
  padding: 16px;
  width: 118px;
  height: 88px;
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.2);
  background: var(--primery-color-white);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 16px;

  visibility: ${({ $visibility }) => `${$visibility}`};
  pointer-events: ${({ $pointerEvents }) => `${$pointerEvents}`};
`;
