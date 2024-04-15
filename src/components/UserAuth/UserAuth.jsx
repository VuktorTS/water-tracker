import { NavbarLink, StyledIcon } from './UserAuth.styled'
import { UserMenu } from '../UserMenu/UserMenu'
// import { useSelector } from "react-redux";
import icons from "img/icons.svg"

export const UserAuth = () => {
  const isLoggedIn = true //useSelector(selectIsLoggedIn);
  
  return (
    <div>
      {isLoggedIn ? <UserMenu /> : <NavbarLink to='/signin'>Sign in
        <StyledIcon>
          <use href={`${icons}#icon-user`}></use>
        </StyledIcon>
        </NavbarLink>
      }

    </div>
  )
}
