import styled from 'styled-components';

export const HomeSection = styled.div`
  background-position: center center;
  padding-top: 24px;
  padding-bottom: 24px;

  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
`;

export const BoxHome = styled.div`
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
  }
`;
