import styled from 'styled-components';
import Select from 'react-dropdown-select';

export const TimeInput = styled.div`
font-size: 16px;
line-height: 1.25;
color: var(--primery-color-blue);
height: 20px`

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