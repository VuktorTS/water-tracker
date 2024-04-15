import { usePopper } from "react-popper"
import { ArrowDownSvg } from "../../img/ArrowDownSvg"
import { Avatar, UserLogo, NickContainer, UserLogoModal, StyledBtn } from "./UserMenu.styled"
import { useState } from "react"
import { CogToothSvg } from "../../img/CogToothSvg"
import { LogoutSvg } from "../../img/LogoutSvg"

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
        <ArrowDownSvg />
      </UserLogo>
      <UserLogoModal
        $visibility={visibility}
        $pointerEvents={pointerEvents}
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        <StyledBtn onClick={openSettingModal}>
          <CogToothSvg />
          Setting
        </StyledBtn>
        <StyledBtn onClick={openLogoutModal}>
          <LogoutSvg />
          Log out
        </StyledBtn>
      </UserLogoModal>
    </div>
  )
}