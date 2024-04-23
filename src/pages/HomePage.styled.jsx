import styled from 'styled-components';

import bottle from '../img/home@1x.png';
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
    top: 0;
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
      background-image: url(${bgImgTab});

      @media (min-resolution: 2dppx) {
        background-image: url(${bgImgTab2x});
      }
    }
  }

  @media (min-width: 1440px) {
    &:before {
      background-image: url(${bgImg});
      background-position: center;
      background-size: contain;

      @media (min-resolution: 2dppx) {
        background-image: url(${bgImg2x});
      }
    }
  }
`;

export const HomePageSection = styled.section`
  padding: 24px 15px 0 15px;
  max-width: 310px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    max-width: 734px;
    padding-top: 40px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1216px;
    flex-direction: row;
    gap: 32px;
    padding: 52px 0 0 0;
  }
`;
export const ContentWraper = styled.div`
  &.today-panel {
    background-color: var(--bg-color-light-blue);
    border-radius: 10px;
    padding: 24px 12px;
  }

  @media screen and (min-width: 768px) {
    position: relative;
    min-height: 498px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &.today-panel {
      padding: 32px 24px;
    }
  }
  @media screen and (min-width: 1440px) {
    position: relative;
    width: 592px;
    max-height: 680px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
export const BottleImg = styled.div`
  width: 280px;
  height: 208px;
  background-image: url(${bottle});
  background-size: contain;

  @media screen and (min-width: 768px) {
    width: 518px;
    height: 386px;
    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -65%);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
  }
  @media screen and (min-width: 1440px) {
    width: 570px;
    height: 500px;
  }
`;
