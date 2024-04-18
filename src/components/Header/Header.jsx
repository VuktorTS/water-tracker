import { Logo } from "../Logo/Logo";
import { UserAuth } from "../UserAuth/UserAuth";
import { StyledHeader } from "./Header.styled";
import { isLoggedIn } from "../../redux/auth/authSelectors";
import { useSelector } from "react-redux";
import { UserLogo } from "../UserLogo/UserLogo";

export const Header = () => {
  const isLogged = useSelector(isLoggedIn);

  return (
    <StyledHeader>
        <div>
          <Logo />
          {isLogged ? <UserLogo/> : <UserAuth/>}
        </div>
    </StyledHeader>
  );
};
