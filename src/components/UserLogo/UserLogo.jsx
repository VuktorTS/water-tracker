import { usePopper } from "react-popper"
import { Avatar, UserLogoModal, StyledBtn, StyledIcon, LogoContainer, NameContainer } from "./UserLogo.styled"
import { useState } from "react"
import icons from "img/icons.svg"
import { useSelector } from "react-redux"
import { getUserEmail, getUserName } from "../../redux/auth/authSelectors"

export const UserLogo = () => {
  const name = useSelector(getUserName)
  const email = useSelector(getUserEmail)
  const user = useSelector(store => store.auth.user)
  const nickLetter = email.slice(0,1)
  console.log(user)
  const [isOpen, setIsOpen] = useState(false);
  const [referenceElement, setReferenceElement] = useState();
  const [popperElement, setPopperElement] = useState();

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom', modifiers: [
      {
        name: name,
        options: {
        offset: [0, 16]
      }}
  ] });
  const onClickPopup = () => setIsOpen(!isOpen)
  
  const visibility = !isOpen ? 'hidden' : 'visible';
  const pointerEvents = !isOpen ? 'none' : 'auto';

  const openSettingModal = () => console.log('SettingModal Will Be Opened')

  const openLogoutModal = () => console.log('LogoutModal Will Be Opened')

  return (
    <div>
      <LogoContainer onClick={onClickPopup} ref={setReferenceElement}>
        <NameContainer>{email}</NameContainer>
        <Avatar>{nickLetter}</Avatar>
        <StyledIcon>
          <use href={`${icons}#icon-arrow-down`}></use>
        </StyledIcon>
      </LogoContainer>
      <UserLogoModal
        $visibility={visibility}
        $pointerEvents={pointerEvents}
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        <StyledBtn onClick={openSettingModal}>
          <StyledIcon>
              <use href={`${icons}#icon-cog-tooth`}></use>
          </StyledIcon>
          Setting
        </StyledBtn>
        <StyledBtn onClick={openLogoutModal}>
        <StyledIcon>
              <use href={`${icons}#icon-log-out`}></use>
          </StyledIcon>
          Log out
        </StyledBtn>
      </UserLogoModal>
    </div>
  )
}