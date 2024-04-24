import styled from 'styled-components';

export const BtnSection = styled.div`
text-align: baseline;
margin: 0 0  24px 0
`

export const RoundBtn = styled.button`
border: 1px solid var(--secondary-color-4);
border-radius: 30px;
padding: 10px;
width: 44px;
height: 44px;

box-shadow: 0 2px 4px 0 rgba(64, 123, 255, 0.2);
background: var(--primery-color-white);
transition: box-shadow 0.3s ease;
&:hover {
  box-shadow: 0 2px 12px 0 rgba(64, 123, 255, 0.54);
}
`

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
  fill: var(--primery-color-blue);
`;

export const Mlspan = styled.span`
display: inline-block;
font-weight: 700;
font-size: 18px;
line-height: 1.33;
text-align: center;
color: var(--primery-color-blue);
margin: 4px 7px;
width: 92px;
height: 36px;

border-radius: 40px;
padding: 6px 10px;
width: 92px;
height: 36px;

background: var(--btn-color-light-blue);
`
