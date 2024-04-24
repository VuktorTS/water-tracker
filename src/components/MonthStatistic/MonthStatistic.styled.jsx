import styled from 'styled-components';

export const CalendarStyle = styled.div``;
export const MonthSelectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
`;
export const Title = styled.span`
  color: var(--primery-color-black);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  @media screen and (min-width: 768px) {
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
  }
`;
export const MonthNav = styled.div`
  display: flex;
  align-items: center;
`;
export const NavBtn = styled.button`
  display: flex;
  border: 1px solid transparent;
  background-color: transparent;
  border-radius: 50%;
  justify-content: center;
  transition: border-radius background-color stroke 0.3s;

  &:hover {
    background-color: var(--primery-color-white);
    border: 1px solid var(--calendar-color-orange);
  }
`;
export const DateText = styled.h2`
  color: var(--primery-color-blue);
  width: 130px;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
export const Month = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(7, 0.5fr);
  gap: 10px;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
`;
export const Day = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  > button {
    color: var(--primery-color-black);
  }
`;

export const PercentFromNorma = styled.p`
  color: var(--secondary-color-blue);
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
export const l = styled.div``;
