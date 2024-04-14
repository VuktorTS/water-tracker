import styled from 'styled-components';
import backgroundMobSVG from '../../img/bg_main_mobile.svg';
import backgroundTabletSVG from '../../img/bg_main_tablet.svg';
import backgroundDesktopSVG from '../../img/bg_main_desktop_group.svg';

export const StyledMain = styled.main`
  &:before {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: -10;
    background-position: center bottom;
    background-size: cover;
    background-image: url('${backgroundMobSVG}');
  }

  @media (min-width: 768px) {
    &:before {
      background-image: url('${backgroundTabletSVG}');
    }
  }

  @media (min-width: 1440px) {
    &:before {
      background-image: url('${backgroundDesktopSVG}');
    }
  }
`;

export const MainContainer = styled.div`
  width: 320px;
  margin: 0 auto;
  padding: 0 20px;

  @media (min-width: 768px) {
    width: 768px;
    padding: 0 32px;
  }

  @media (min-width: 1440px) {
    width: 1440px;
    padding: 0 18px;
  }
`;
