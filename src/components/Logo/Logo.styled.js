import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HomeLink = styled(NavLink)``;

export const ImageDiv = styled.div`
  background-image: url(${(props) => props.simple});
  /* background-image: url('../../img/Logo.jpg'); */
  background-repeat: no-repeat;
  background-size: cover;
  height: 48px;
  width: 102px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${(props) => props.simple});
    /* background-image: url('../../img/Logo-2x.jpg'); */
  }
`;
