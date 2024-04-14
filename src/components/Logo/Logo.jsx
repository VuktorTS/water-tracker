import { HomeLink } from "./Logo.styled"
import image from '../../img/Logo.jpg';
// import { useSelector } from "react-redux";


export const Logo = () => {
  const isLoggedIn = true //useSelector(selectIsLoggedIn);
  const path = isLoggedIn ? '/home' : '/welcome';
  return (
    <HomeLink to={path}>
      <img src={image} alt="Water Tracker logo" />
    </HomeLink>
  )
}
