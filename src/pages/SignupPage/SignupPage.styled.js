import { ErrorMessage, Field, Form } from 'formik';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  height: 70vh;
  width: 100%;
  margin: auto;
  margin-top: 24px;

  background-image: url(${(props) => props.mobile});
  background-repeat: no-repeat;
  background-size: cover;
  /* border: 2px red solid; */
  color: var(--primery-color-black);

  @media (min-width: 320px) {
    /* padding: 0 20px; */
    width: 280px;
  }

  @media (min-width: 768px) {
    /* padding-right: 32px; */
    background-image: url(${(props) => props.tablet});

    width: 704px;
  }

  @media (min-width: 1440px) {
    background-image: url(${(props) => props.desktop});

    width: 1216px;
  }
`;

export const Title = styled.h1`
  font-size: 26px;
  font-weight: 500;
  line-height: 1.23;
  padding-bottom: 16px;
`;

// export const StyledFormik = styled(Formik)`
//   width: 100%;
//   height: 100%;
//   display: block;
//   margin: auto;
// `;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const InputBox = styled.div`
  font-size: 18px;
  line-height: 1.33;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  margin-bottom: 16px;
`;

export const StyledField = styled(Field)`
  /* margin-top: 11px; */
  border: 1px solid var(--primery-color-blue);
  border-radius: 6px;
  color: var(--secondary-color-blue);
  font-size: 16px;
  line-height: 1.23;
  letter-spacing: 0%;
  padding: 12px 10px;

  &.active,
  &:focus {
    color: var(--primery-color-blue);
  }

  &::placeholder {
    color: var(--secondary-color-blue);
  }
`;

export const Label = styled.label`
  font-size: 18px;
  line-height: 1.33;
  margin-bottom: 8px;
`;

export const StyledError = styled(ErrorMessage)`
  color: var(--btn-color-red);
  font-size: 14px;
  line-height: 1.29;
  position: absolute;
  top: 100%;
  color: var(--btn-color-red);

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
  transition: ease-in 0.2s;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
`;

export const StyledLink = styled(NavLink)`
  color: var(--primery-color-blue);

  &:hover {
    color: var(--secondary-yellow);
  }
`;
