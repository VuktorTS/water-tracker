import { Logo } from "../Logo/Logo";
import { UserAuth } from "../UserAuth/UserAuth";
import { StyledHeader } from "./Header.styled";
// import { useSelector } from "react-redux";

export const Header = () => {

  return (
    <StyledHeader>

        <div>
          <Logo />
          <UserAuth/>
          
        </div>

    </StyledHeader>
  );
};
