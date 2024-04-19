import { usePopper } from "react-popper"
import { Avatar, UserLogoModal, StyledBtn, StyledIcon, LogoContainer, NameContainer, Div } from "./UserLogo.styled"
import { useEffect, useState } from "react"
import icons from "img/icons.svg"
import { useDispatch, useSelector } from "react-redux"
import { getUser } from "../../redux/auth/authSelectors"
import { LogOutModal } from "../LogOutModal/LogOutModal"
import ModalWrapper from "../ModalWrapper/ModalWrapper"
import { logOut } from "../../redux/auth/authOperations"
import { SettingModal } from "../SettingModal/SettingModal"

export const UserLogo = () => {
  const dispatch = useDispatch()

  const user = useSelector(getUser)
  const { username, avatarURL } = user

  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [openSettingModal, setOpenSettingModal] = useState(false)
  const [referenceElement, setReferenceElement] = useState();
  const [popperElement, setPopperElement] = useState();
  const [logoutModal, setLogoutModal] = useState(false);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom', modifiers: [
      {
        name: name,
        options: {
        offset: [0, 0]
      }}
  ] });
  const onClickPopup = () => setIsOpenPopup(!isOpenPopup)
  
  const visibility = !isOpenPopup ? 'hidden' : 'visible';
  const pointerEvents = !isOpenPopup ? 'none' : 'auto';


  const handleShowDetails = () => {
    // const selectedProfile = friends.find(friend => friend.id === profileId);
    setOpenSettingModal(true);
    // setModalData(selectedProfile);
  };  const handleCloseModal = () => {
    setOpenSettingModal(false);
  };

  const openLogoutModal = () => setLogoutModal(true)
  const onCloseLogoutModal = () => setLogoutModal(false)

  const onLogout = ()=>{
    dispatch(logOut());
    onCloseLogoutModal();
  }

  useEffect(() => {
    const findPopup = (event) => {
      const popup = event.target.closest('#logoModal')
      if (!popup) {
        setIsOpenPopup(false)
      }
    }

    document.addEventListener('mousedown', findPopup)
    return () => document.removeEventListener('mousedown', findPopup)
  }, [])

  return (
    <Div>
      <LogoContainer onClick={onClickPopup} ref={setReferenceElement}>
        <NameContainer>{username}</NameContainer>
        <Avatar src={avatarURL} alt='user avatar'></Avatar>
        <StyledIcon>
          <use href={`${icons}#icon-arrow-down`}></use>
        </StyledIcon>
      </LogoContainer>
      <UserLogoModal
        id='logoModal'
        $visibility={visibility}
        $pointerEvents={pointerEvents}
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        <StyledBtn onClick={handleShowDetails}>
          <StyledIcon>
              <use href={`${icons}#icon-cog-tooth`}></use>
          </StyledIcon>
          Setting
        </StyledBtn>
        {openSettingModal && <ModalWrapper onClose={handleCloseModal} title="Setting" stylesSetting={true}><SettingModal handleCloseModal={handleCloseModal} profileData={user} /></ModalWrapper>}
        <StyledBtn onClick={openLogoutModal}>
        <StyledIcon>
              <use href={`${icons}#icon-log-out`}></use>
          </StyledIcon>
          Log out
        </StyledBtn>
        {logoutModal && <ModalWrapper onClose={onCloseLogoutModal} title="Log out"><LogOutModal onClose={onCloseLogoutModal} onLogout={onLogout}/></ModalWrapper>}
      </UserLogoModal>
    </Div>
  )
}