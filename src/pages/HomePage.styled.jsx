import styled from "styled-components";
import bottle from '../img/home@1x.png';

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
`
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
`
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
