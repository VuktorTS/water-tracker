import styled from 'styled-components';
import backgroundMobSVG from '../img/bg_main_mobile.svg';
import backgroundTabletSVG from '../img/bg_main_tablet.svg';
import backgroundDesktopSVG from '../img/bg_main_desktop_group.svg';

export const BackgroundContainer = styled.div`
  background-image: url('${backgroundMobSVG}');
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px;

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;

    background-image: url('${backgroundTabletSVG}');
  }

  @media (min-width: 1440px) {
    background-image: url('${backgroundDesktopSVG}');
  }
`;

export const StyledContainer = styled.div`
  min-height: 100vh;
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    max-width: 1014px;
  }
`;
