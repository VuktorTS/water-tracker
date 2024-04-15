import { HomeLink } from "./Logo.styled"
import simpleImage from '../../img/Logo.jpg';

// ще потрібно буде доробити рендер зображення під ретину
// import retinaImage from '../../img/Logo-2x.jpg';
// import { useSelector } from "react-redux";

export const Logo = () => {
  const isLoggedIn = true //useSelector(selectIsLoggedIn);
  const path = isLoggedIn ? '/home' : '/welcome';
  return (
    <HomeLink to={path}>
      {/* <ImageDiv simple={simpleImage} retina={retinaImage}></ImageDiv> */}
      <img src={simpleImage} alt="Water Tracker Logo" />
    </HomeLink>
  )
}
