import { Logo } from "../Logo/Logo";
import { UserAuth } from "../UserAuth/UserAuth";
import { Container, StyledHeader } from "./Header.styled";
// import { useSelector } from "react-redux";

export const Header = () => {

  return (
    <StyledHeader>
      <Container>
        <div>
          <Logo />
          <UserAuth/>
          
        </div>
      </Container>
    </StyledHeader>
  );
};
