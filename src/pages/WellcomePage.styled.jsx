import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 24px;

  @media (min-width: 768px) {
    gap: 60px;
    margin-top: 40px;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: center;
    gap: 81px;
    align-items: flex-end;
    margin-top: 80px;
  }
`;
