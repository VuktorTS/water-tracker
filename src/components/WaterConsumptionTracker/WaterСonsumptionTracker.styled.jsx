import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin-bottom: 40px;
  max-width: 280px;

  @media (min-width: 768px) {
    margin-bottom: 60px;
    max-width: 704px;
  }

  @media (min-width: 1440px) {
    max-width: 439px;
    max-height: 366px;
    margin-bottom: 0;
    margin-right: 81px;
  }
`;

export const MainTitle = styled.h1`
  font-size: 28px;
  line-height: 1.14;
  color: var(--primery-color-black);
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 1.17;
  }

  @media (min-width: 1440px) {
    font-size: 32px;
  }
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 24px;
  line-height: 1.25;
  color: var(--primery-color-black);
  max-width: 246px;

  @media (min-width: 768px) {
    font-size: 26px;
    line-height: 1.23;
    max-width: 439px;
  }
`;

export const ListContainer = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const ListTitle = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  color: var(--primery-color-black);
  margin-bottom: 12px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media (min-width: 1440px) {
    flex-direction: column;
  }
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  @media (min-width: 768px) {
    width: 224px;
    height: 40px;
  }

  @media (min-width: 1440px) {
    width: 248px;
  }
`;

export const Icon = styled.svg`
  width: 32px;
  height: 32px;

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const TextItem = styled.p`
  font-size: 16px;
  line-height: 1.25;
  color: var(--primery-color-black);
  flex: 1;
  margin: 0 auto;
`;

export const StyledButton = styled.button`
  border-radius: 10px;
  padding: 8px 30px;
  width: 100%;
  height: 36px;
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
  background: var(--primery-color-blue);
  border: none;

  &:hover {
    box-shadow: 0 4px 14px 0 rgba(64, 123, 255, 0.54);
  }

  &:active {
    box-shadow: none;
  }

  @media (min-width: 768px) {
    width: 336px;
    height: 44px;
    padding: 10px 30px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;
  color: var(--primery-color-white);

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;
