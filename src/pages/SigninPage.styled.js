import { ErrorMessage, Field, Form } from 'formik';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledContainer = styled.div`
  height: 70vh;
  width: 100%;
  margin: auto;
  padding-top: 24px;
  color: var(--primery-color-black);

  @media (min-width: 320px) {
    width: 280px;
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
  padding-bottom: 16px;
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
  font-size: 18px;
  line-height: 1.33;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  margin-bottom: 16px;
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
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  @media (min-width: 768px) {
    padding: 10px 30px;
  }

  &:hover {
    box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
    background: var(--primery-color-blue);
  }

  &:active {
    box-shadow: none;
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

export const BackgroundContainer = styled.div`
  &:before {
    content: '';
    position: fixed;
    display: block;
    width: 100%;
    height: 100%;
    top: 108px;
    left: 0px;
    z-index: -10;
    background-image: var(--bg-signin-img-mob);
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: cover;

    @media (min-resolution: 2dppx) {
      background-image: var(--bg-signin-img-mob2x);
    }
  }

  @media (min-width: 768px) {
    &:before {
      top: 0;
      background-image: var(--bg-signin-img-tab);
      background-position: center;

      @media (min-resolution: 2dppx) {
        background-image: var(--bg-signin-img-tab2x);
      }
    }
  }

  @media (min-width: 1440px) {
    width: 1404px;
    height: 582px;
    padding: 0 18px;

    &:before {
      background-image: var(--bg-signin-img);

      background-position: center;
      background-size: contain;

      @media (min-resolution: 2dppx) {
        background-image: var(--bg-signin-img2x);
      }
    }
  }
`;

export const BottleImg = styled.div`
  &:before {
    content: '';
    position: fixed;
    display: block;
    width: 280px;
    height: 210px;
    top: 450px;
    left: 50%;
    transform: translateX(-50%);
    z-index: -5;
    background-image: var(--signin-bottle-img-mob);
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;

    @media (min-resolution: 2dppx) {
      background-image: var(--signin-bottle-img-mob2x);
    }
  }

  &:before {
    @media (min-width: 768px) {
      background-image: var(--signin-bottle-img-tab);
      width: 736px;
      height: 548px;
      top: 17%;
      transform: translateY(-17%);
      left: 250%;
      transform: translateX(-250%);

      background-size: contain;

      @media (min-resolution: 2dppx) {
        background-image: var(--signin-bottle-img-tab2x);
      }
    }

    @media (min-width: 840px) and (max-width: 1439px) {
      left: 100%;
      transform: translateX(-100%);
    }
    @media (min-width: 840px) and (max-width: 1439px) {
      left: 100%;
      transform: translateX(-100%);
    }
  }

  &:before {
    @media (min-width: 1440px) {
      width: 916px;
      height: 680px;
      background-image: var(--signin-bottle-img);
      top: 8%;
      left: -15%;
      transform: translateX(15%);
      @media (min-resolution: 2dppx) {
        background-image: var(--signin-bottle-img2x);
      }
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0;
  }

  @media (min-width: 1440px) {
    padding: 0 18px;
    flex-direction: row-reverse;
  }
`;
