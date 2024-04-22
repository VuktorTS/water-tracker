import styled from 'styled-components';
import Select  from 'react-dropdown-select';

export const ValueHeader = styled.h3`
  font-family: var(--font-family);
font-weight: 500;
font-size: 18px;
line-height: 1.11;
color: var(--primery-color-bl ack);
margin-bottom: 24px;
@media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const SectionHeader = styled.p`
margin-top: 0;
margin-bottom: 12px;
`

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
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

export const BottomMl = styled(Mlspan)`
height: auto;
text-align: center;
margin: 0;
padding: 0;
background: var(--primery-color-white)`

export const ErrMessage = styled.div`
position: absolute;
top: 450px;
font-weight: 400;
 font-size: 12px;
line-height: 129%;
color: var(--btn-color-red);

  @media screen and (min-width: 768px) {
    font-size: 14px;
    top: 440px;
  }
`

// export const TimeSpan = styled.span`
// font-family: var(--font-family);
// display: inline-block;
// font-size: 12px;
// line-height: 200%;
// height: 24px;`

export const ValueInput = styled.input`

&[type=number]::-webkit-inner-spin-button, 
&[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
font-family: inherit;
font-size: 16px;
line-height: 1.25;
color: ${({ err }) => (err === 'true' ? 'var(--btn-color-red)' : 'var(--primery-color-blue)')};
border: 1px solid ${({ err }) => (err === 'true' ? 'var(--btn-color-red)' : '#D7E3FF')};
border-radius: 6px;
padding: 12px 10px;
width: 120px;
height: 44px;
margin-bottom: 24px ;
outline: 0;
&:focus {
        box-shadow: 0 0 0 3px rgba(0, 116, 217, 0.2) !important;
}

  @media screen and (min-width: 768px) {
    width: 100%;
  }`

export const SubmitSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 76px;
  gap: 16px;

   @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: right;

  }
  `

export const SubmitBtn = styled.button`
outline: none;
color: var(--primery-color-white);
border-radius: 10px;
border: none;
padding: 8px 30px;
width: 256px;
height: 36px;

box-shadow: 0 4px 8px 0 rgba(64, 123, 255, 0.34);
background: var(--primery-color-blue);

&:disabled {
    cursor: not-allowed; 
  }

   @media screen and (min-width: 768px) {
    padding: 10px 30px;
    width: 160px;
  }
  `