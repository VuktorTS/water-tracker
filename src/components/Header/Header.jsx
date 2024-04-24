import { Logo } from "../Logo/Logo";
import { UserAuth } from "../UserAuth/UserAuth";
import { StyledHeader } from "./Header.styled";
import { isLoggedIn, getToken } from "../../redux/auth/authSelectors";
import { useSelector } from "react-redux";
import { UserLogo } from "../UserLogo/UserLogo";

export const Header = () => {
  const isLogged = useSelector(isLoggedIn);
  const token = useSelector(getToken);

  return (
    <StyledHeader>
        <div>
          <Logo />
          {(isLogged && token) ? <UserLogo/> : <UserAuth/>}
        </div>
    </StyledHeader>
  );
};
