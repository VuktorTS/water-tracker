import styled from 'styled-components';

export const ContainerOne = styled.div`
  padding-top: 24px;
  padding-left: 20px;

  @media (min-width: 768px) {
    padding-top: 40px;
    padding-left: 32px;
    display: flex;
  }

  @media (min-width: 1440px) {
    padding-top: 22px;
    padding-left: 38px;
  }
`;

export const DailyNormaContainer = styled.div`
  box-sizing: border-box;
  border: 1px solid rgb(236, 242, 255);
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(158, 187, 255, 0.12);
  background: rgb(255, 255, 255);
  width: 164px;
  height: 74px;
  padding: 8px 20px 8px 20px;

  @media (min-width: 768px) {
    height: 76px;
    position: absolute;
  }

  @media (min-width: 1440px) {
    margin-top: 30px;
    margin-left: 74px;
  }
`;

export const DailyNormaTitle = styled.p`
  color: rgb(47, 47, 47);
  //   font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;

  //   text-align: left;
  width: 124px;
  height: 24px;
  margin-bottom: 12px;
`;

export const DailyNormaLiter = styled.p`
  color: rgb(64, 123, 255);
  font-size: 22px;
  font-weight: 700;
  line-height: 22px;
  width: 50px;
  margin-right: 12px;
`;

export const DailyNormaEdit = styled.button`
  width: 28px;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;

  color: rgb(139, 174, 255);
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;

  text-align: left;
`;

export const DailyNormaContainerMini = styled.div`
  display: flex;
  width: 90px;
  height: 22px;
`;

export const ImgWrapper = styled.div`
  // width: 400px;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  @media (min-width: 1440px) {
    justify-content: flex-start;
    width: 0%;
  }
`;

// export const ImgBotl = styled.img`
//   width: 280px;
//   height: 208px;
// `;
