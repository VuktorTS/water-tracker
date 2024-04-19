import React, { useState } from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import sprite from '../../img/icons.svg';
import { getTimeOptions } from '../../services/timeOptions';
import { Mlspan, ValueHeader, RoundBtn, SectionHeader, BtnSection, TimeSelect, ValueInput, SubmitSection, SubmitBtn, BottomMl, Icon, DataBox, GlassIcon, EditMlSpan, TimeSpan, ErrMessage } from './TodayListModal.styled';

const MIN_VALUE = 1;
const MAX_VALUE = 5000;
const STEP = 50;

const TodayListModal = ({title, onClose, data}) => {
  const [ml, setMl] = useState(data?.ml ?? 0);
  const [time, setTime] = useState(data?.time ?? null);
  const [inputValue, setInputValue] = useState(ml);
  const [err, setErr] = useState(false);
  const currentDate = new Date().toJSON().slice(0, 11);

  useEffect(() => {
    if (!data) {
      toast.info('No notes yet.')
    }
  }, []);
  
  const addMl = () => {
    setErr(false);
    if (ml >= MAX_VALUE) {
      return;
    }
        setMl(ml + STEP);
        setInputValue(ml + STEP);
  };

  const decreaseMl = () => {
        setErr(false);
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
    if (value <= 0 || value > 5000) {
      setErr(true);
      return;
    }
    setMl(Number(value));
  }
  const handleChange = (evt) => {
    setErr(false);
    const newValue = evt.currentTarget.value;
    if (/^\d*$/.test(newValue)) {
      setInputValue(newValue);
      return;
    }
    setErr(true);
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
      onChange={handleChange}
      onBlur={handleBlur}
      err={err}
    ></ValueInput>
    {err && <ErrMessage>* Please enter a valid amount of water between {MIN_VALUE} and {MAX_VALUE} ml.</ErrMessage>}  
              <SubmitSection>
                      <BottomMl>{ml}ml</BottomMl>
          <SubmitBtn
            type="submit"
        onClick={dataSubmit}
        disabled={!time || !ml}
          >
            Save
          </SubmitBtn>
              </SubmitSection>
          
                  </>
                   )  
}

export default TodayListModal;
