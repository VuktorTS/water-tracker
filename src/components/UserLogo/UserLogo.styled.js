import styled from 'styled-components';

export const LogoContainer = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  gap: 8px;

  &:hover {
    box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.2);
    transition: box-shadow 0.3s ease;
    background: none;
    border-radius: 10px;
  }
`;

export const AvatarImg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;

export const AvatarDiv = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: var(--secondary-color-blue);
  font-size: 18px;
  font-weight: 600;
  color: var(--primery-color-black);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Div = styled.div`
  position: relative;
`;

export const NameContainer = styled.div`
  font-family: inherit;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  text-align: right;
  color: var(--primery-color-black);
  text-transform: capitalize;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const UserLogoModal = styled.div`
  border-radius: 10px;
  padding: 16px;
  width: 118px;
  height: 88px;
  box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.2);
  background: var(--primery-color-white);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 16px;
  z-index: 1;

  visibility: ${({ $visibility }) => `${$visibility}`};
  pointer-events: ${({ $pointerEvents }) => `${$pointerEvents}`};
`;

export const StyledBtn = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    transition: ease-in 0.2s;
    color: var(--secondary-yellow);

    > svg {
      transition: ease-in 0.2s;
      stroke: var(--secondary-yellow);
    }
  }
`;

export const StyledIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: var(--primery-color-blue);
  fill: none;
`;

export const ArrowIcon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: var(--primery-color-blue);
  fill: none;
`;
