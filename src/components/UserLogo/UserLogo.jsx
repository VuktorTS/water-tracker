import { usePopper } from "react-popper"
import { Avatar, UserLogoModal, StyledBtn, StyledIcon, LogoContainer, NameContainer } from "./UserLogo.styled"
import { useState } from "react"
import icons from "img/icons.svg"
import { useDispatch, useSelector } from "react-redux"
import { getUserEmail, getUserName } from "../../redux/auth/authSelectors"
import { LogOutModal } from "../LogOutModal/LogOutModal"
import ModalWrapper from "../ModalWrapper/ModalWrapper"
import { logOut } from "../../redux/auth/authOperations"

export const UserLogo = () => {
  const dispatch = useDispatch()
  const user = useSelector(store => store.auth.user)
  
  const { username, avatarURL } = user

  console.log(user)
  const [isOpen, setIsOpen] = useState(false);
  const [referenceElement, setReferenceElement] = useState();
  const [popperElement, setPopperElement] = useState();
  const [logoutModal, setLogoutModal] = useState(false);

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

  const openLogoutModal = () => setLogoutModal(true)
  const onCloseLogoutModal = () => setLogoutModal(false)

  const onLogout = ()=>{
    dispatch(logOut());
    onCloseLogoutModal();
  }

  return (
    <div>
      <LogoContainer onClick={onClickPopup} ref={setReferenceElement}>
        <NameContainer>{username}</NameContainer>
        <Avatar url={avatarURL}></Avatar>
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
        {logoutModal && <ModalWrapper onClose={onCloseLogoutModal} title="Log out"><LogOutModal onClose={onCloseLogoutModal} onLogout={onLogout}/></ModalWrapper>}
      </UserLogoModal>
    </div>
  )
}