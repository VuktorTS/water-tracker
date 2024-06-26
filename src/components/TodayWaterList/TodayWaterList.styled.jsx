import styled from "styled-components"

export const TodayContainer = styled.div`
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
overflow-y: scroll;

&::-webkit-scrollbar {
  width: 2px;
  border-radius: 5px;
  background-color: var(--btn-color-light-blue);
}
&::-webkit-scrollbar-thumb {
  width: 4px;
  border-radius: 5px;
  background-color: var(--secondary-color-blue);
}
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
font-size: 12px;
font-weight: 400;
line-height: 2;
color: var(--primery-color-black);
`
export const TodayTools = styled.div`
display: flex;
gap: 18px;
margin-right: 7px;
`
export const ButtonEdit = styled.button`
background-color: transparent;
padding: 0;
width: 20px;
height: 20px;
  & svg {
    stroke: var(--secondary-color-blue);
    fill: transparent;
    width: 16px;
    height: 16px;
  }

  &:hover {
    border-bottom: 1px solid var(--secondary-color-blue);
  }
`
export const ButtonDelete = styled.button`
background-color: transparent;
padding: 0;
width: 20px;
height: 20px;

& svg {
  stroke: var(--btn-color-red);
  fill: transparent;
  width: 16px;
  height: 16px;
}

&:hover {
  border-bottom: 1px solid var(--btn-color-red);
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
margin-bottom: 24px;

@media screen and (min-width: 768px) {
  font-size: 18px;
  line-height: 1.33;
}

& svg {
  width: 24px;
  height: 24px;
  fill: var(--primery-color-blue); 
}

&:hover {
  color: var(--secondary-yellow);
  stroke: var(--secondary-yellow);
}

 &:hover svg {
    fill: var(--secondary-yellow); 
  }
`
export const l = styled.div`

`