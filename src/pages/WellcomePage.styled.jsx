import styled from 'styled-components';

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
    background-image: var(--bg-welcome-page-img-mob);
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: cover;

    @media (min-resolution: 2dppx) {
      background-image: var(--bg-welcome-page-img-mob2x);
    }
  }

  @media (min-width: 768px) {
    &:before {
      background-image: var(--bg-welcome-page-img-tab);

      @media (min-resolution: 2dppx) {
        background-image: var(--bg-welcome-page-img-tab2x);
      }
    }

    @media (min-width: 1440px) {
      &:before {
        background-image: var(--bg-welcome-page-img);
        background-size: contain;

        @media (min-resolution: 2dppx) {
          background-image: var(--bg-welcome-page-img2x);
        }
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
      background-image: var(--welcome-page-element);
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;

      @media (min-resolution: 2dppx) {
        background-image: var(--welcome-page-element2x);
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
