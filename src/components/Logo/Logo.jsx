import { HomeLink } from './Logo.styled';
import simpleImage from '../../img/Logo.png';
import retinaImage from '../../img/Logo-2x.png';

export const Logo = () => {
  const isLoggedIn = true;
  const path = isLoggedIn ? '/home' : '/welcome';
  return (
    <HomeLink to={path}>
      <picture>
        <source srcSet={retinaImage} media="(min-resolution: 2dppx)" />

        <img
          src={simpleImage}
          alt="Water Tracker Logo"
          width="102"
          height="48"
        />
      </picture>
    </HomeLink>
  );
};
