import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 50px;
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    margin: 31px 192px 185px 198px;
  }
`;
