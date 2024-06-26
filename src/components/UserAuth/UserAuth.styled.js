import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavbarLink = styled(NavLink)`
  display: flex;
  gap: 8px;
  align-items: center;
  color: var(--primery-color-blue);
  transition: ease-in 0.2s;

  &:hover {
    color: var(--secondary-yellow);
  }
`;

export const StyledIcon = styled.svg`
  width: 28px;
  height: 28px;
  stroke: var(--primery-color-black);
  fill: none;
`;
