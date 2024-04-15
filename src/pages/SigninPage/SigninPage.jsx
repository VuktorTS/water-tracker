import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, InputBox, Label, StyledContainer, StyledError, StyledField, StyledForm, StyledLink } from './SigninPage.styled';

import mobileImage from '../../img/background-img-mobile.png'
import tabletImage from '../../img/background-img-tablet.png'
import desktopImage from '../../img/background-img-desktop.png'

const SigninPage = () => {
  return (
    <StyledContainer mobile={mobileImage} tablet={tabletImage} desktop={desktopImage}>
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
            <StyledField type="password" id="password" name="password" placeholder="Password" />
          </InputBox>
          <Button type="submit">Sign In</Button>
        </StyledForm>
      </Formik>
      <StyledLink to="/signup">Sign Up</StyledLink>
    </StyledContainer>
  );
};

export default SigninPage;