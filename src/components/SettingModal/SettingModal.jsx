import { useRef, useState } from "react";
import { useDispatch } from 'react-redux';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';

import { AvatarContainer, AvatarField, AvatarImg, AvatarInput, Avatar, BigLabel, Button, InputBox, Label, RadioBox, ShowIcon, StyledContainer, StyledError, StyledField, StyledFieldset, StyledForm, TextInputsContainer, UploadButton, UploadIcon } from './SettingModal.styled';
import icons from "img/icons.svg";

import { emailRegex } from '../../constants/validEmail';
import { toastError, toastSuccess } from '../../services/notification';
import { setCurrentUser } from '../../redux/auth/authOperations';
import { checkDuplicateEntries, checkEmptyEntries } from '../../helpers/objectOperations';

export const SettingModal = ({ handleCloseModal, profileData }) => {
  const dispatch = useDispatch()
  const { username, email, gender, initialPhoto } = profileData

  const [previewPhoto, setPreviewPhoto] = useState(initialPhoto);
  const [showOutdatedPassword, setShowOutdatedPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const fileInputRef = useRef(null);

  const toggleOutdatedPasswordVisibility = () => {
    setShowOutdatedPassword((prevShowOutdatedPassword) => !prevShowOutdatedPassword);
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const toggleRepeatPasswordVisibility = () => {
    setShowRepeatPassword((prevRepeatShowPassword) => !prevRepeatShowPassword);
  };

  const handleChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFieldValue('photo', file);
      }
      setPreviewPhoto(URL.createObjectURL(file))
    };
  };

  const handleUpload = () => fileInputRef.current.click();

  return (
    <StyledContainer >
      <Formik
        initialValues={{
          photo: initialPhoto || username ? username.charAt(0).toUpperCase() : email.charAt(0).toUpperCase(),
          gender: gender || '',
          username: username || 'Your name',
          email: email || 'E-mail',
          outdatedPassword: '',
          password: '',
          passwordVerification: ''
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().trim().matches(emailRegex, 'Invalid email'),
          outdatedPassword: Yup.string().min(8, 'Minimum eight characters').max(64, 'Too Long!'),
          password: Yup.string().min(8, 'Minimum eight characters').max(64, 'Too Long!'),
          passwordVerification: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
        })}
          onSubmit={async (formData) => {
            const { email, gender, outdatedPassword, password, username } = formData
            const updatedData = { email, gender, password: outdatedPassword, passwordNew: password, photo: previewPhoto, username }

            const notEmptyData = checkEmptyEntries(updatedData)
            const validData = checkDuplicateEntries(profileData, notEmptyData)
            if (Object.keys(validData).length === 0) {
              handleCloseModal()
              return
            }
              dispatch(setCurrentUser(validData)).unwrap().then(() => {
             toastSuccess(`Profile changed successfully`)
             handleCloseModal()
          }).catch(error => toastError(error))
        }}
        >
          {({ setFieldValue }) => (
            <StyledForm autoComplete="off">
              <InputBox>
                <BigLabel htmlFor="photo">Your Photo</BigLabel>
                <AvatarContainer >
                  {previewPhoto ? (
                    <AvatarImg src={previewPhoto} alt="Avatar" />
                  ) : (
                    <Avatar>
                      {username ? username.charAt(0).toUpperCase() : email.charAt(0).toUpperCase()}
                    </Avatar>
                  )}
                  <AvatarField name="imageFile">
                    {({ field }) => (
                      <AvatarInput
                        {...field}
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        onChange={(event) => handleChange(event, setFieldValue)}
                      />
                    )}
                  </AvatarField>
                  <UploadButton type="button" onClick={handleUpload}>
                    <UploadIcon>
                      <use href={`${icons}#icon-upload`} />
                    </UploadIcon>
                    Upload a photo
                  </UploadButton>
                </AvatarContainer>
                <StyledError name="photo" component="div" />
              </InputBox>
              <TextInputsContainer>
                <StyledFieldset>
                  <BigLabel className="marginBottom">Your Gender Identity</BigLabel>
                  <RadioBox className="marginBottom">
                    <div>
                      <Field type="radio" id="woman" name="gender" value="Woman" />
                      <Label htmlFor="woman">Woman</Label>
                    </div>
                    <div>
                      <Field type="radio" id="man" name="gender" value="Man" />
                      <Label htmlFor="man">Man</Label>
                    </div>
                  </RadioBox>
                  <InputBox>
                    <BigLabel htmlFor="username">Your Name</BigLabel>
                    <StyledField className='userName' type="text" id="username" name="username" />
                    <StyledError name="username" component="div" />
                  </InputBox>
                  <InputBox>
                    <BigLabel htmlFor="email">E-mail</BigLabel>
                    <StyledError name="email" component="div" />
                    <StyledField type="email" id="email" name="email" placeholder="E-mail" />
                  </InputBox>
                </StyledFieldset>
                <StyledFieldset >
                  <BigLabel className="marginBottom">Password</BigLabel>
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
              </TextInputsContainer>
              <Button type="submit">Save</Button>
            </StyledForm>
          )}
      </Formik>
    </StyledContainer>
  )
}
