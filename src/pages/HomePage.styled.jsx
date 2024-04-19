import styled from 'styled-components';
import bgImgMob from '../img/bg_home_mob@1x.png';
import bgImgMob2x from '../img/bg_home_mob@2x.png';
import bgImgTab from '../img/bg_home_tab@1x.png';
import bgImgTab2x from '../img/bg_home_tab@2x.png';
import bgImg from '../img/main_page@1x.png';
import bgImg2x from '../img/main_page@2x.png';

export const BackgroundContainer = styled.div`
  &:before {
    content: '';
    position: fixed;
    display: block;
    width: 100%;
    height: 100%;
    top: 108px;
    left: 0px;
    z-index: -10;
    background-image: url(${bgImgMob});
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: cover;

    @media (min-resolution: 2dppx) {
      background-image: url(${bgImgMob2x});
    }
  }

  @media (min-width: 768px) {
    &:before {
      top: 88px;
      background-image: url(${bgImgTab});

      @media (min-resolution: 2dppx) {
        background-image: url(${bgImgTab2x});
      }
    }
  }

  @media (min-width: 1440px) {
    &:before {
      top: 80px;
      background-image: url(${bgImg});
      background-position: center;
      background-size: contain;

      @media (min-resolution: 2dppx) {
        background-image: url(${bgImg2x});
      }
    }
  }
`;
