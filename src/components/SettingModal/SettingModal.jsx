import ModalWrapper from "../ModalWrapper/ModalWrapper"
import { BigLabel, Button, InputBox, Label, RadioBox, ShowIcon, StyledContainer, StyledError, StyledField, StyledFieldset, StyledForm } from './SettingModal.styled';
import { emailRegex } from '../../constants/validEmail';
// import { toastError, toastSuccess } from '../services/notification';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from "react";
import icons from "img/icons.svg";


export const SettingModal = ({ handleCloseModal }) => {
  // const { name, email, gender, photo } = profileData
  

  const [showOutdatedPassword, setShowOutdatedPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const toggleOutdatedPasswordVisibility = () => {
    setShowOutdatedPassword((prevShowOutdatedPassword) => !prevShowOutdatedPassword);
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const toggleRepeatPasswordVisibility = () => {
    setShowRepeatPassword((prevRepeatShowPassword) => !prevRepeatShowPassword);
  };

  return (
    <div>
      <ModalWrapper onClose={handleCloseModal} title="Setting">
      <StyledContainer >
      <Formik
        initialValues={{
          photo: '',
          gender: 'ggggender',
          name: 'nnnname',
          email: 'eeeemail',
          outdatedPassword: '',
          password: '',
          passwordVerification: ''
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().trim().matches(emailRegex, 'Invalid email').required('Required'),
          password: Yup.string().required('Required').min(8, 'Minimum eight characters').max(64, 'Too Long!'),
          passwordVerification: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Required')
        })}
            onSubmit={async (formData) => {
          console.log(formData)
          // const { email, password } = formData
          // dispatch(registration({ email, password })).unwrap().then(() => {
          //   toastSuccess(`${email} registered successfully`)
          //   navigate('/signin')
          // }).catch(error => toastError(error))
        }}
      >
        <StyledForm>
          <InputBox>
            <BigLabel htmlFor="photo">Your Photo</BigLabel>
            <span>Upload a photo</span>
            <Field type="file" id="photo" name="photo" accept="image/*" />
            <StyledError name="photo" component="div" />
          </InputBox>
          <BigLabel>Your Gender Identity</BigLabel>
          <RadioBox>
            <div>
              <Field type="radio" id="woman" name="gender" value="woman" />
              <Label htmlFor="woman">Woman</Label>                  
            </div>
            <div>
              <Field type="radio" id="man" name="gender" value="man" />
              <Label htmlFor="man">Man</Label>
            </div>
          </RadioBox>
          <InputBox>
            <BigLabel htmlFor="name">Your Name</BigLabel>
            <StyledField type="text" id="name" name="name" />
            <StyledError name="name" component="div" />
          </InputBox>
          <InputBox>
            <BigLabel htmlFor="email">E-mail</BigLabel>
            <StyledError name="email" component="div" />
            <StyledField type="email" id="email" name="email" placeholder="E-mail" />
          </InputBox>
          
              <StyledFieldset >
                <BigLabel>Password</BigLabel>

          <InputBox>
            <Label htmlFor="outdatedPassword">Outdated password</Label>
            <StyledError name="outdatedPassword" component="div" />
            <StyledField type={showOutdatedPassword ? 'text' : 'password'} id="outdatedPassword" name="outdatedPassword" placeholder="Password" />
              <ShowIcon type="button" onClick={toggleOutdatedPasswordVisibility}>
                {showOutdatedPassword ? 'Hide' && <use href={`${icons}#icon-opend`} /> : 'Show' && <use href={`${icons}#icon-closed`} />} 
              </ShowIcon>
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
              </StyledFieldset>
              <Button type="submit">Sign Up</Button>
              
        </StyledForm>
      </Formik>

    </StyledContainer>
      </ModalWrapper>
    </div>
  )
}
