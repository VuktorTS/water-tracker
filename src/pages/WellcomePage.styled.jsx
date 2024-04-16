import styled from 'styled-components';
import bgImgMob from '../img/bg_main_page_mob@1x.png';
import bgImgMob2x from '../img/bg_main_page_mob@2x.png';
import bgImgTab from '../img/bg_main_page_tab@1x.png';
import bgImgTab2x from '../img/bg_main_page_tab@2x.png';
import bgImg from '../img/bg_main_page@1x.png';
import bgImg2x from '../img/bg_main_page@2x.png';
import bgElement from '../img/main_page@1x.png';
import bgElement2x from '../img/main_page@2x.png';

export const BackgroundContainer = styled.div`
  &:before {
    content: '';
    position: fixed;
    display: block;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: -10;
    background-image: url(${bgImgMob});
    background-repeat: no-repeat;
    background-position: bottom;
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
      background-size: contain;

      @media (min-resolution: 2dppx) {
        background-image: url(${bgImg2x});
      }
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

    &:before {
      content: '';
      position: fixed;
      display: block;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
      z-index: -10;
      background-image: url(${bgElement});
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;

      @media (min-resolution: 2dppx) {
        background-image: url(${bgElement2x});
      }
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 24px;

  @media (min-width: 768px) {
    gap: 60px;
    margin-top: 40px;
  }

  @media (min-width: 1440px) {
    flex-direction: row;
    justify-content: center;
    gap: 81px;
    align-items: flex-end;
    margin-top: 80px;
  }
`;
