import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, InputBox, Label, ShowIcon, StyledContainer, StyledError, StyledField, StyledForm, StyledLink } from './SigninPage.styled';
import { useState } from 'react';
import icons from "img/icons.svg"

const SigninPage = () => {
    const [showPassword, setShowPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };

  return (
    <StyledContainer >
      <h1>Sign In</h1>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Invalid email').required('Required'),
          password: Yup.string().required('Required').min(6, 'Minimum six characters')
        })}
        onSubmit={(values) => {
          console.log(values);
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
              </ShowIcon>          </InputBox>
          <Button type="submit">Sign In</Button>
        </StyledForm>
      </Formik>
      <StyledLink to="/signup">Sign Up</StyledLink>
    </StyledContainer>
  );
};

export default SigninPage;