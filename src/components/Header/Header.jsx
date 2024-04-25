import { Logo } from '../Logo/Logo';
import { UserAuth } from '../UserAuth/UserAuth';
import { StyledHeader, StyledCheckbox, Switcher, Icon } from './Header.styled';
import { isLoggedIn } from '../../redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { UserLogo } from '../UserLogo/UserLogo';
import { useTheme } from '../../hooks/use-theme';
import sprite from '../../img/icons.svg';

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
        <Switcher htmlFor="toggler">
          <StyledCheckbox
            id="toggler"
            type="checkbox"
            onChange={onChangeTheme}
            checked={isChecked}
            readOnly
          />
          <Icon>
            <use href={`${sprite}#icon-theme-light-dark`}></use>
          </Icon>
        </Switcher>

        {isLogged ? <UserLogo /> : <UserAuth />}
      </div>
    </StyledHeader>
  );
};