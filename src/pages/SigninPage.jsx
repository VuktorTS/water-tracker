import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  BackgroundContainer,
  Button,
  InputBox,
  Label,
  ShowIcon,
  StyledContainer,
  StyledError,
  StyledField,
  StyledForm,
  StyledLink,
} from './SigninPage.styled';
import { useState } from 'react';
import icons from 'img/icons.svg';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/auth/authOperations';
import { toastError } from '../services/notification';
import { useNavigate } from 'react-router-dom';
import { emailRegex } from '../constants/validEmail';

const SigninPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <BackgroundContainer>
      <StyledContainer>
        <h1>Sign In</h1>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .trim()
              .matches(emailRegex, 'Invalid email')
              .required('Required'),
            password: Yup.string()
              .required('Required')
              .min(8, 'Minimum eight characters')
              .max(64, 'Too Long!'),
          })}
          onSubmit={(values) => {
            dispatch(logIn(values))
              .unwrap()
              .then(() => {
                navigate('/home');
              })
              .catch((error) => toastError(error));
          }}
        >
          <StyledForm>
            <InputBox>
              <Label htmlFor="email">Enter your email</Label>
              <StyledError name="email" component="div" />
              <StyledField
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
              />
            </InputBox>
            <InputBox>
              <Label htmlFor="password">Enter your password</Label>
              <StyledError name="password" component="div" />
              <StyledField
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Password"
              />
              <ShowIcon type="button" onClick={togglePasswordVisibility}>
                {showPassword
                  ? 'Hide' && <use href={`${icons}#icon-opend`} />
                  : 'Show' && <use href={`${icons}#icon-closed`} />}
              </ShowIcon>{' '}
            </InputBox>
            <Button type="submit">Sign In</Button>
          </StyledForm>
        </Formik>
        <StyledLink to="/signup">Sign Up</StyledLink>
      </StyledContainer>
    </BackgroundContainer>
  );
};

export default SigninPage;
