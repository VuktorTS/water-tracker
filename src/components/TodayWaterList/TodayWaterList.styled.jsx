import styled from "styled-components"

export const TodayContainer = styled.div`
margin-bottom: 24px;
`
export const TodayTitle = styled.h3`
font-size: 24px;
font-weight: 500;
line-height: 1.25;
color: var(--primery-color-black);
margin-bottom: 16px;

@media screen and (min-width: 768px) {
  font-size: 26px;
  line-height: 1.23;
}
`
export const TodayList = styled.ul`
height: 212px;
overflow: auto;
@media screen and (min-width: 768px) {
  height: 183px;
}
`
export const TodayItem = styled.li`
display: flex;
justify-content: space-between;
padding: 12px 0;
align-items: center;
border-bottom: 1px solid var(--btn-color-light-blue);
`
export const TodayInfo = styled.div`
display: flex;
align-items: center;
gap: 12px;
`
export const TodayClass = styled.svg`
width: 26px;
height: 26px;

@media screen and (min-width: 768px) {
  width: 36px;
  height: 36px;
}
`
export const TodayValue = styled.p`
font-size: 18px;
font-weight: 400;
line-height: 1.33;
color: var(--primery-color-blue);
`
export const TodayTime = styled.p`
margin-left: 12px;
line-height: 24px;
font-size: 12px;
color: #2f2f2f;
`
export const TodayTools = styled.div`
display: flex;
gap: 18px;
`
export const ButtonEdit = styled.button`
  & svg {
    stroke: var(--secondary-color-blue);
    fill: transparent;
    width: 16px;
    height: 16px;
  }
  height: 16px;
  position: relative;
  background-color: transparent;
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -3px;
    width: 16px;
    height: 1px;
    background-color: #9ebbff;
    transition: 350ms cubic-bezier(0.23, 1, 0.32, 1);
    opacity: 0;
    transform: translateX(-50%);
  }

  &:is(:hover, :focus)::after {
    opacity: 1;
  }
`
export const ButtonDelete = styled.button`

& svg {
  stroke: var(--btn-color-red);
  fill: transparent;
  width: 16px;
  height: 16px;
}

height: 16px;
background-color: transparent;
position: relative;
margin-right: 4px;

&::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: -3px;
  width: 16px;
  height: 1px;
  background-color: #ef5050;
  transition: 350ms cubic-bezier(0.23, 1, 0.32, 1);
  opacity: 0;
  transform: translateX(-50%);
}

&:is(:hover, :focus)::after {
  opacity: 1;
}
`
export const AddWaterBtn = styled.button`
display: flex;
gap: 8px;
align-items: center;
background-color: transparent;
color: var(--primery-color-blue);
border: none;
margin-top: 12px;
font-size: 16px;
font-weight: 500;
line-height: 1.25;
stroke: var(--primery-color-blue);

@media screen and (min-width: 768px) {
  font-size: 18px;
  line-height: 1.33;
}

& svg {
  width: 24px;
  height: 24px;
  fill: transparent;
}

&:hover {
  color: var(--secondary-yellow);
  stroke: var(--secondary-yellow);
}
`
// export const l = styled.div`

// `