import styled from 'styled-components';
import Select  from 'react-dropdown-select';

export const ValueHeader = styled.h3`
  font-family: var(--font-family);
font-weight: 500;
font-size: 18px;
line-height: 1.11;
color: var(--primery-color-black);
margin-bottom: 24px;
@media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

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

export const SectionHeader = styled.p`
margin-top: 0;
margin-bottom: 12px;

`
export const BtnSection = styled.div`
text-align: baseline;
margin: 0 0  24px 0`

export const RoundBtn = styled.button`
border: 1px solid var(--secondary-color-4);
border-radius: 30px;
padding: 10px;
width: 44px;
height: 44px;

box-shadow: 0 2px 4px 0 rgba(64, 123, 255, 0.2);
background: var(--primery-color-white);`

export const Icon = styled.svg`
  width: 24px;
  height: 24px;
`;

export const GlassIcon = styled.svg`
  width: 36px;
  height: 36px;
  fill: black;
  color: black;
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

export const EditMlSpan = styled.span`
display: inline-block;
font-weight: 400;
font-size: 18px;
line-height: 133%;
text-align: center;
color: var(--primery-color-blue);`


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

export const TimeSpan = styled.span`
font-family: var(--font-family);
display: inline-block;
font-size: 12px;
line-height: 200%;
height: 24px;`

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
export const TimeInput = styled.div`
font-size: 16px;
line-height: 1.25;
color: var(--primery-color-blue);
height: 20px`

export const TimeSelect1 = styled(Select)`
width: 120px;
color: var(--primery-color-blue);
border: red; 
height: 44px;
`
export const TimeSelect = styled(Select)`
outline: none;
color: var(--primery-color-blue) !important;
border: 1px solid var(--btn-color-light-blue) !important;
border-radius: 6px !important;
padding: 12px 10px !important;
width: 120px !important;
height: 44px !important;
margin-bottom: 24px !important;

&:focus {
        box-shadow: 0 0 0 3px rgba(0, 116, 217, 0.2) !important;
}

font-family: var(--font-family) !important;
font-weight: 400 !important;
font-size: 16px !important;
line-height: 1.25 !important;


//////плейсхолдер в інпуті
.react-dropdown-select-input {
  font-size: 16px;
  line-height: 1.25 !important;
  color: var(--primery-color-black) !important;
  
}

//////обраний час в інпуті
.react-dropdown-select-content {
  color: var(--primery-color-blue) !important;
        
}

////// випадаюче меню

  .react-dropdown-select-dropdown {
    border-radius: 6px;
    max-height: 200px;
    box-shadow: 0 2px 4px 0 rgba(64, 123, 255, 0.2);
    background: var(--primery-color-white);
    color: var(--primery-color-blue) !important;
      @media screen and (min-width: 768px) {
    width: 100% !important;
  }

  }

  //////колір букв в випадаючому списку варіантів часу

  .react-dropdown-select-item {
    color: var( --primery-color-black);
    opacity: 0.6;
    font-family: var(--font-family);
    border: 1px solid  var(--btn-color-light-blue);
       
    :hover {
       color: #ffffff80;
    }
  }
////// колір цифр в випадаючому меню коли один варіант години вибраний

  .react-dropdown-select-item.react-dropdown-select-item-selected,
  .react-dropdown-select-item.react-dropdown-select-item-active {
    color: var(--primery-color-blue);
    background: var(--bg-color-light-blue);
    font-weight: 700;
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 100% !important;
  }

`