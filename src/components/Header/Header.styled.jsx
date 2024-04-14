import styled from 'styled-components';
// export const Navigation = styled.nav``;

export const StyledHeader = styled.header`
  padding: 30px 0;
  display: block;
  margin: auto;
`;

export const Container = styled.div`
  margin: 0 auto;
  height: 48px;
  
  @media (min-width: 320px) {
    width: 280px;
  }
  
  @media (min-width: 768px) {
    width: 704px;
  }
  
  @media (min-width: 1440px) {
    width: 1216px;
  }

  > div {
    /* padding: 0 15px; */
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

