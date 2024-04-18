import React, { useState } from 'react';
import Select from 'react-dropdown-select';
import { getTimeOptions } from '../../services/timeOptions';
import { Mlspan, ValueHeader, RoundBtn, SectionHeader, BtnSection, TimeSelect, ValueInput, SubmitSection, SubmitBtn, BottomMl } from './AddWaterModal.styled';

const MIN_VALUE = 1;
const MAX_VALUE = 5000;
const STEP = 50;


const AddWaterModal = () => {
        const [ml, setMl] = useState(50);
        const [time, setTime] = useState('07:00');

        const addMl = () => {
    if (ml >= MAX_VALUE) {
      return;
    }
    setMl(ml + STEP);
  };

  const decreaseMl = () => {
    if (ml <= MIN_VALUE) {
      return;
    }
    setMl(ml - STEP);
  };
        
    const handleChange = evt => {
        const { value } = evt.currentTarget;
    setMl(Number(value));
    };

    const AddWaterSubmit = evt => {
        const data = { time, ml };
        evt.preventDefault();
        onClose();
        console.log(data);
    }

      return (<>
              <ValueHeader>Choose a value:</ValueHeader>
              <SectionHeader>Amount of water:</SectionHeader>
              <BtnSection>
                      <RoundBtn type="button" onClick={decreaseMl}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule='evenodd' clipRule="evenodd" d="M5.25 12C5.25 11.8011 5.32902 11.6103 5.46967 11.4697C5.61032 11.329 5.80109 11.25 6 11.25H18C18.1989 11.25 18.3897 11.329 18.5303 11.4697C18.671 11.6103 18.75 11.8011 18.75 12C18.75 12.1989 18.671 12.3897 18.5303 12.5303C18.3897 12.671 18.1989 12.75 18 12.75H6C5.80109 12.75 5.61032 12.671 5.46967 12.5303C5.32902 12.3897 5.25 12.1989 5.25 12Z" fill="#407BFF" />
                </svg>
          </RoundBtn>
          <Mlspan>{ml}ml</Mlspan>
          <RoundBtn type="button" onClick={addMl}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 5.25C12.1989 5.25 12.3897 5.32902 12.5303 5.46967C12.671 5.61032 12.75 5.80109 12.75 6V11.25H18C18.1989 11.25 18.3897 11.329 18.5303 11.4697C18.671 11.6103 18.75 11.8011 18.75 12C18.75 12.1989 18.671 12.3897 18.5303 12.5303C18.3897 12.671 18.1989 12.75 18 12.75H12.75V18C12.75 18.1989 12.671 18.3897 12.5303 18.5303C12.3897 18.671 12.1989 18.75 12 18.75C11.8011 18.75 11.6103 18.671 11.4697 18.5303C11.329 18.3897 11.25 18.1989 11.25 18V12.75H6C5.80109 12.75 5.61032 12.671 5.46967 12.5303C5.32902 12.3897 5.25 12.1989 5.25 12C5.25 11.8011 5.32902 11.6103 5.46967 11.4697C5.61032 11.329 5.80109 11.25 6 11.25H11.25V6C11.25 5.80109 11.329 5.61032 11.4697 5.46967C11.6103 5.32902 11.8011 5.25 12 5.25Z" fill="#407BFF" />
                </svg>
          </RoundBtn>
              </BtnSection>
          
          <SectionHeader>Recording time:</SectionHeader>
                <TimeSelect
                id="time"
            options={getTimeOptions()}
            labelField="time"
            valueField="id"
            onChange={(values) =>setTime(values[0].time)}
                      closeOnSelect="true"
                      dropdownHandle='false'
                      placeholder='Select time'
                      dropdownHandleRenderer={() => (
  	<span></span>
  )}        
            required
          ></TimeSelect>
          <ValueHeader>
            Enter the value of the water used:
        </ValueHeader>
                <ValueInput
                id="ml"
                type="number"
                value={ml}
                min={MIN_VALUE}
                max={MAX_VALUE}
                onChange={handleChange}
              ></ValueInput>
              <SubmitSection>
                      <BottomMl>{ml}ml</BottomMl>
          <SubmitBtn
            type="submit"
            onClick={AddWaterSubmit}
          >
            Save
          </SubmitBtn>
              </SubmitSection>
          
                  </>
                   )  
}

export default AddWaterModal;