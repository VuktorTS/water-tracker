import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 768px) {
    gap: 60px;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: center;
    gap: 81px;
    align-items: flex-end;
  }
`;
