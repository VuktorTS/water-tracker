import { NavbarLink } from './UserAuth.styled'
import { UserMenu } from '../UserMenu/UserMenu'
import { UserOutlineSvg } from '../../img/UserOutlineSvg'
// import { useSelector } from "react-redux";

export const UserAuth = () => {
  const isLoggedIn = true //useSelector(selectIsLoggedIn);
  
  return (
    <div>
      {isLoggedIn ? <UserMenu /> : <NavbarLink to='/signin'>Sign in
        <UserOutlineSvg/>
        </NavbarLink>
      }

    </div>
  )
}
