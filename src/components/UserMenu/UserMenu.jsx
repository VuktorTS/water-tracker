import { usePopper } from "react-popper"
import { Avatar, UserLogo, NickContainer, UserLogoModal, StyledBtn, StyledIcon } from "./UserMenu.styled"
import { useState } from "react"
import icons from "img/icons.svg"


export const UserMenu = () => {
  const email = 'dmytro@mail.net'
  const nickName = (email.split('@'))[0]
  const nickLetter = nickName.slice(0,1)

  const [isOpen, setIsOpen] = useState(false);
  const [referenceElement, setReferenceElement] = useState();
  const [popperElement, setPopperElement] = useState();

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom', modifiers: [
      {
        name: 'offset',
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
      <UserLogo onClick={onClickPopup} ref={setReferenceElement}>
        <NickContainer>{nickName}</NickContainer>
        <Avatar>{nickLetter}</Avatar>
        <StyledIcon>
          <use href={`${icons}#icon-arrow-down`}></use>
        </StyledIcon>
      </UserLogo>
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