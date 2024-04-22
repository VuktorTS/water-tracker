import styled from 'styled-components';

export const DataBox = styled.div`
width: 256px;
height: 52px;
padding: 8px 24px;
border-radius: 10px;
margin-bottom: 24px;
display: flex;
gap: 12px;
align-items: center;
background: var(--bg-color-light-blue);

@media screen and (min-width: 768px) {
    width: 254px;
  }
`

export const GlassIcon = styled.svg`
  width: 36px;
  height: 36px;
  fill: black;
  color: black;
`;

export const EditMlSpan = styled.span`
display: inline-block;
font-weight: 400;
font-size: 18px;
line-height: 133%;
text-align: center;
color: var(--primery-color-blue);
`

export const TimeSpan = styled.span`
font-family: var(--font-family);
display: inline-block;
font-size: 12px;
line-height: 200%;
height: 24px;
`