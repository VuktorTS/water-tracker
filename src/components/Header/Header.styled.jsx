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
  width: 40px;
  height: 16px;
`;

export const StyledCheckbox = styled.input`
  width: 0;
  height: 0;
  opacity: 0;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--primery-color-black);
  transition: 0.4s;
  border-radius: 20px;

  &::before {
    position: absolute;
    content: '';
    left: 2px;
    bottom: 2px;
    height: 12px;
    width: 12px;

    background-color: var(--primery-color-white);
    transition: 0.4s;
    border-radius: 20px;
  }
  input:checked + & {
    background-color: var(--primery-color-black);
  }
  input:checked + &::before {
    transform: translateX(24px);
  }
`;
