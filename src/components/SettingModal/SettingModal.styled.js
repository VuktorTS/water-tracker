import { ErrorMessage, Field, Form } from 'formik';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  /* height: 70vh; */
  width: 100%;
  margin: auto;
  padding-top: 24px;
  color: var(--primery-color-black);

  @media (min-width: 320px) {
    width: 256px;
  }

  @media (min-width: 768px) {
    padding-top: 40px;
    width: 704px;
  }

  @media (min-width: 1440px) {
    padding-top: 148px;
    padding-left: 738px;
    width: 1216px;
  }
`;

export const Title = styled.h1`
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    width: 336px;
  }

  @media (min-width: 1440px) {
    width: 384px;
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  margin-bottom: 16px;
`;

export const RadioBox = styled(InputBox)`
  margin-top: 12px;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 24px;

  > div {
    display: flex;
    align-items: center;
    gap: 3px;

    > label {
      margin: 0;
    }
  }
`;

export const StyledFieldset = styled.fieldset`
  border: none;
  margin: 0;
  padding: 0;
`;

export const StyledField = styled(Field)`
  border: 1px solid var(--primery-color-blue);
  border-radius: 6px;
  color: var(--secondary-color-blue);
  font-size: 16px;
  line-height: 1.23;
  letter-spacing: 0%;
  padding: 12px 10px;
  transition: ease-in 0.2s;

  &.active,
  &:focus {
    color: var(--primery-color-blue);
  }

  &::placeholder {
    color: var(--secondary-color-blue);
  }
`;

export const Label = styled.label`
  font-size: 16px;
  line-height: 1.25;
  margin-bottom: 8px;
`;

export const BigLabel = styled.label`
  font-size: 18px;
  line-height: 1.11;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const StyledError = styled(ErrorMessage)`
  color: var(--btn-color-red);
  font-size: 14px;
  line-height: 1.29;
  position: absolute;
  top: 100%;
  color: var(--btn-color-red);
  transition: ease-in 0.2s;

  & + input {
    border: 1px solid var(--btn-color-red);
    color: var(--btn-color-red);
  }
`;

export const Button = styled.button`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  padding: 8px 30px;
  color: var(--primery-color-white);
  border-radius: 10px;
  background-color: var(--primery-color-blue);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  @media (min-width: 768px) {
    padding: 10px 30px;
  }
`;

export const StyledLink = styled(NavLink)`
  color: var(--primery-color-blue);
  transition: ease-in 0.2s;

  &:hover {
    color: var(--secondary-yellow);
  }
`;

export const ShowIcon = styled.svg`
  position: absolute;
  top: 62%;
  right: 14px;
  width: 14px;
  height: 12px;
  stroke: var(--primery-color-blue);
`;
