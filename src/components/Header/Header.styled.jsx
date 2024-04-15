import styled from 'styled-components';
// export const Navigation = styled.nav``;

export const StyledHeader = styled.header`
  padding-top: 8px;
  display: block;
  margin: 0 auto;
  
  @media (min-width: 320px) {
    width: 280px;
  }
  
  @media (min-width: 768px) {
    padding-top: 16px;
    width: 704px;
  }
  
  @media (min-width: 1440px) {
    width: 1216px;
  }

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: #407BFF;
    font-family: Roboto Regular, sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
  }
`;

