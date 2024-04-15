import { Formik, Form, Field, ErrorMessage } from 'formik';
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup';
import { StyledContainer } from './SignupPage.styled';

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
          password: Yup.string().required('Required'),
          passwordVerification: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Required')
        })}
        onSubmit={(values) => {
          // Submit logic here
          console.log(values);
        }}
      >
        <Form>
          <div>
            <label htmlFor="email">Enter Your Email</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="password">Enter Your Password</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <div>
            <label htmlFor="passwordVerification">Repeat Password</label>
            <Field type="password" id="passwordVerification" name="passwordVerification" />
            <ErrorMessage name="passwordVerification" component="div" />
          </div>
          <button type="submit">Sign Up</button>
        </Form>
      </Formik>
      <NavLink to="/signin">Sign In</NavLink>
    </StyledContainer>
  );
};

export default SignUpPage;