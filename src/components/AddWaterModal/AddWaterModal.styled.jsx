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

export const SectionHeader = styled.p`
margin: 0 0 0 12px 0

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

export const Mlspan = styled.span`
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

background: var(--secondary-color---5);
`

export const BottomMl = styled(Mlspan)`
margin: 0;
padding: 0;`

export const ValueInput = styled.input`

&[type=number]::-webkit-inner-spin-button, 
&[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
font-family: var(--font-family);
font-weight: 400;
font-size: 16px;
line-height: 1.25;
color: var(--primery-color-blue);

border: 1px solid #D7E3FF;
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

   @media screen and (min-width: 768px) {
    padding: 10px 30px;
width: 160px;
  }
  `

export const TimeSelect = styled(Select)`

&:focus {
        box-shadow: 0 0 0 3px rgba(0, 116, 217, 0.2) !important;
}


font-family: var(--font-family) !important;
font-weight: 400 !important;
font-size: 16px !important;
line-height: 1.25 !important;

border: 1px solid #D7E3FF !important;
border-radius: 6px !important;
padding: 12px 10px !important;
width: 120px !important;
height: 44px !important;
margin-bottom: 24px !important;

///// выбранный цвет в инпуте
color: var(--primery-color-blue); important!;

.react-dropdown-select-content {
        &::placeholder {
        font-family: var(--font-family) !important;
font-weight: 400 !important;
font-size: 20px !important;
font-size: 16px !important;
line-height: 1.25 !important;

}
}

  .react-dropdown-select-clear,
  .react-dropdown-select-dropdown-handle {
    color: #fff;
  }


  .react-dropdown-select-dropdown {
    position: absolute;
    left: 0;
    border: none;
    width: 120px;
    padding: 0;
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    max-height: 200px;
    overflow: auto;
    z-index: 9;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(64, 123, 255, 0.2);
    background: var(--primery-color-white);
    color: #407BFF !important;
      @media screen and (min-width: 768px) {
    width: 100% !important;
  }

  }

  //////цвет букв в выпадающем меню времени

  .react-dropdown-select-item {
    color: black;
    opacity: 0.6;
    font-family: var(--font-family);
    border: 1px solid  var(--secondary-color---5);
       
    :hover {
       color: #ffffff80;
    }
  }

  .react-dropdown-select-item.react-dropdown-select-item-selected,
  .react-dropdown-select-item.react-dropdown-select-item-active {
    border-bottom: 1px solid #333;
    color: var(--primery-color-blue);
  }

  @media screen and (min-width: 768px) {
    width: 100% !important;
  }

`