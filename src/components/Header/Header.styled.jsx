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
    color: #407bff;
    font-family:
      Roboto Regular,
      sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
    position: relative;
  }
`;

export const Switcher = styled.label`
  position: relative;
  display: inline-block;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const StyledCheckbox = styled.input`
  width: 0;
  height: 0;
  opacity: 0;
`;

export const Icon = styled.svg`
  width: 16px;
  height: 16px;
  fill: var(--primery-color-blue);

  @media (min-width: 320px) {
    width: 24px;
    height: 24px;
  }

  &:hover {
    fill: var(--secondary-yellow);
  }
`;
