import { Logo } from '../Logo/Logo';
import { UserAuth } from '../UserAuth/UserAuth';
import {
  StyledHeader,
  Slider,
  StyledCheckbox,
  Switcher,
} from './Header.styled';
import { isLoggedIn } from '../../redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { UserLogo } from '../UserLogo/UserLogo';
import { useTheme } from '../../hooks/use-theme';

export const Header = () => {
  const isLogged = useSelector(isLoggedIn);
  const { theme, setTheme } = useTheme();

  const isChecked = theme === 'dark';
  const onChangeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <StyledHeader>
      <div>
        <Logo />

        {isLogged ? <UserLogo /> : <UserAuth />}
      </div>

      <Switcher htmlFor="toggler">
        <StyledCheckbox
          id="toggler"
          type="checkbox"
          onChange={onChangeTheme}
          checked={isChecked}
          readOnly
        />
        <Slider />
      </Switcher>
    </StyledHeader>
  );
};
