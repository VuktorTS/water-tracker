import { NavbarLink, StyledIcon } from "./UserAuth.styled"
import icons from "img/icons.svg";

export const UserAuth = () => {
  
  return (
    <NavbarLink to='/signin'>Sign in
    <StyledIcon>
      <use href={`${icons}#icon-user`}></use>
    </StyledIcon>
    </NavbarLink>
  )
}
