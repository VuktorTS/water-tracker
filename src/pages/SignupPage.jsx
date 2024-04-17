import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, InputBox, Label, ShowIcon, StyledContainer, StyledError, StyledField, StyledForm, StyledLink } from './SignupPage.styled';
import { useState } from 'react';
import icons from "img/icons.svg"
import { useDispatch } from 'react-redux';
import { registration } from '../redux/auth/authOperations';
import { useNavigate } from 'react-router-dom';
import { toastError, toastSuccess } from '../services/notification';

const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [signedUp, setSignedUp] = useState(false)
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const toggleRepeatPasswordVisibility = () => {
    setShowRepeatPassword((prevRepeatShowPassword) => !prevRepeatShowPassword);
  };

  return (
    <StyledContainer >
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
          passwordVerification: ''
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Invalid email').required('Required'),
          password: Yup.string().required('Required').min(6, 'Minimum six characters'),
          passwordVerification: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Required')
        })}
        onSubmit={ async (formData) => {
          const { email, password } = formData
          dispatch(registration({ email, password })).unwrap().then(() => {
            toastSuccess(`${email} registered succesfuly`)
            navigate('/signin')
          }).catch(error => toastError(error))
            // setSignedUp(true)


          
          // dispatch(addContact(profileData)).unwrap().then(() => toast.success(`${name} added to Data Base!`)).catch(error => toast.error(error))
          // e.currentTarget.reset()

        }}
      >
        <StyledForm>
          <InputBox>
            <Label htmlFor="email">Enter your email</Label>
            <StyledError name="email" component="div" />
            <StyledField type="email" id="email" name="email" placeholder="E-mail" />
          </InputBox>
          <InputBox>
            <Label htmlFor="password">Enter your password</Label>
            <StyledError name="password" component="div" />
            <StyledField type={showPassword ? 'text' : 'password'} id="password" name="password" placeholder="Password" />
              <ShowIcon type="button" onClick={togglePasswordVisibility}>
                {showPassword ? 'Hide' && <use href={`${icons}#icon-opend`} /> : 'Show' && <use href={`${icons}#icon-closed`} />} 
              </ShowIcon>
            </InputBox>
          <InputBox>
            <Label htmlFor="passwordVerification">Repeat password</Label>
            <StyledError name="passwordVerification" component="div" />
            <StyledField type={showRepeatPassword ? 'text' : 'password'} id="passwordVerification" name="passwordVerification" placeholder="Repeat password" />
              <ShowIcon type="button" onClick={toggleRepeatPasswordVisibility}>
                {showRepeatPassword ? 'Hide' && <use href={`${icons}#icon-opend`} /> : 'Show' && <use href={`${icons}#icon-closed`} />} 
              </ShowIcon>
          </InputBox>
          <Button type="submit" disabled={signedUp}>Sign Up</Button>
        </StyledForm>
      </Formik>
      <StyledLink to="/signin">Sign In</StyledLink>
    </StyledContainer>
  );
};

export default SignUpPage;