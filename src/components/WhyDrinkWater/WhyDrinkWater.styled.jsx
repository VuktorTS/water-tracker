import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 10px;
  padding: 24px 16px;
  width: 280px;
  height: 416px;
  box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.3);
  background: var(--bg-color-light-blue);
  max-width: 280px;

  @media (min-width: 768px) {
    padding: 32px 24px;
    min-width: 494px;
    max-height: 332px;
  }

  @media (min-width: 1440px) {
    margin-top: 34px;
    max-width: 494px;
  }
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: var(--primery-color-black);
  margin-bottom: 12px;
`;

export const List = styled.ul`
  display: flex;
  gap: 16px;
  flex-direction: column;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const Icon = styled.svg`
  width: 8px;
  height: 8px;
`;

export const TextItem = styled.p`
  font-size: 16px;
  line-height: 1.25;
  color: var(--primery-color-black);
  flex: 1;
  margin: 0 auto;
`;
