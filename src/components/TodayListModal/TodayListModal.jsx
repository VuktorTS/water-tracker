import React, { useState } from 'react';
import sprite from '../../img/icons.svg';
import { getTimeOptions } from '../../services/timeOptions';
import { Mlspan, ValueHeader, RoundBtn, SectionHeader, BtnSection, TimeSelect, ValueInput, SubmitSection, SubmitBtn, BottomMl, Icon, DataBox, GlassIcon, EditMlSpan, TimeSpan } from './TodayListModal.styled';

const MIN_VALUE = 1;
const MAX_VALUE = 5000;
const STEP = 50;

const TodayListModal = ({title, onClose, data}) => {
  const [ml, setMl] = useState(data?.ml ?? '0');
  const [time, setTime] = useState(data?.time ?? "");
  const [inputValue, setInputValue] = useState(ml);
  const currentDate = new Date().toJSON().slice(0, 11);
  
      const addMl = () => {
    if (ml >= MAX_VALUE) {
      return;
    }
        setMl(ml + STEP);
        setInputValue(ml + STEP);
  };

  const decreaseMl = () => {
    if (ml <= STEP) {
      return;
    }
    setMl(ml - STEP);
    setInputValue(ml - STEP);
  };
        
  const handleTimeChange = (values) => {
    if (values.length !== 0) {
      setTime(values[0].time)
    }
  }
  
  const handleBlur = evt => {
    const { value } = evt.currentTarget;
    setMl(Number(value));

  }

  const dataSubmit = evt => {
    const date = `${currentDate}${time.slice(0, 5)}`;
        const fulldata = { date, ml};
        evt.preventDefault();
        onClose();
        console.log(fulldata);
    }

  return (<> {data && <DataBox>
    <GlassIcon>
      <use href={`${sprite}#icon-glass`}></use>
    </GlassIcon>
    <EditMlSpan>{ml} ml</EditMlSpan>
    <TimeSpan>{time}</TimeSpan>
  </DataBox>}
              <ValueHeader>{title}</ValueHeader>
              <SectionHeader>Amount of water:</SectionHeader>
              <BtnSection>
                      <RoundBtn type="button" onClick={decreaseMl}>
                <Icon>
              <use href={`${sprite}#icon-decrement-outline`}></use>
            </Icon>
          </RoundBtn>
          <Mlspan>{ml}ml</Mlspan>
          <RoundBtn type="button" onClick={addMl}>
                <Icon>
              <use href={`${sprite}#icon-add`}></use>
            </Icon>
          </RoundBtn>
              </BtnSection>
          
          <SectionHeader>Recording time:</SectionHeader>
                <TimeSelect
                id="time"
            options={getTimeOptions()}
            labelField="time"
            valueField="id"
            onChange={(values) => handleTimeChange(values)}
            closeOnSelect="true"
            dropdownHandle='false'
            searchable='false'
            placeholder={data?.time ?? `Select time...`}
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
                value={inputValue}
                min={MIN_VALUE}
                max={MAX_VALUE}
      onChange={(evt) => setInputValue(evt.currentTarget.value)}
      onBlur={handleBlur}
              ></ValueInput>
              <SubmitSection>
                      <BottomMl>{ml}ml</BottomMl>
          <SubmitBtn
            type="submit"
            onClick={dataSubmit}
          >
            Save
          </SubmitBtn>
              </SubmitSection>
          
                  </>
                   )  
}

export default TodayListModal;
