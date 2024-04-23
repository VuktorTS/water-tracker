import styled from 'styled-components';

export const DailyNormaContainer = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 8px 20px;
  height: 74px;
  max-width: 166px;
  border-radius: 10px;
  border: 1px solid var(--bg-color-light-blue);
  box-shadow: 0 4px 8px 0 rgba(158, 187, 255, 0.12);
`;
export const DailyTitle = styled.h2`
  color: var(--primery-color-black);
  font-weight: 500;
  font-size: 18px;
  height: 24px;
  line-height: 0.75;
`;
export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const DailyWaterNorma = styled.div`
  color: var(--primery-color-blue);
  font-weight: 700;
  line-height: 1;
  font-size: 22px;
`;
export const EditWaterBtn = styled.button`
  color: var(--secondary-color-blue);
  line-height: 0.8;
  cursor: pointer;

  &:hover {
    color: var(--secondary-yellow);
  }
`;
