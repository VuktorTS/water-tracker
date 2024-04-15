import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, InputBox, Label, StyledContainer, StyledError, StyledField, StyledForm, StyledLink } from './SignupPage.styled';

import mobileImage from '../../img/background-img-mobile.png'
import tabletImage from '../../img/background-img-tablet.png'
import desktopImage from '../../img/background-img-desktop.png'

const SignUpPage = () => {
  return (
    <StyledContainer mobile={mobileImage} tablet={tabletImage} desktop={desktopImage}>
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
            <StyledField type="password" id="password" name="password" placeholder="Password" />
          </InputBox>
          <InputBox>
            <Label htmlFor="passwordVerification">Repeat password</Label>
            <StyledError name="passwordVerification" component="div" />
            <StyledField type="password" id="passwordVerification" name="passwordVerification" placeholder="Repeat password"/>
          </InputBox>
          <Button type="submit">Sign Up</Button>
        </StyledForm>
      </Formik>
      <StyledLink to="/signin">Sign In</StyledLink>
    </StyledContainer>
  );
};

export default SignUpPage;