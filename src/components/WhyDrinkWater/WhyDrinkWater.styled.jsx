import styled from 'styled-components';

export const Container = styled.div`
  width: 280px;
  border-radius: 10px;
  padding: 24px 16px;
  box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.3);
  background: var(--bg-color-light-blue);
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 768px) {
    padding: 32px 24px;
    width: 494px;
  }
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  color: var(--primery-color-black);
  margin: 0;
`;

export const List = styled.ul`
  padding-left: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Item = styled.li`
  line-height: 1.25;
  color: var(--primery-color-black);
  position: relative;
  padding-left: 16px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background-color: var(--primery-color-blue);
    border-radius: 50%;
  }
`;
