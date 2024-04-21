import React, { useState } from 'react';
import { useEffect } from 'react';
import { MAX_VALUE, MIN_VALUE, STEP } from '../../constants/addWater';
import { adjustedTimeString } from '../../constants/currentDate';
import sprite from '../../img/icons.svg';
import { toastInfo } from '../../services/notification';
import { getTimeOptions } from '../../services/timeOptions';
import { Mlspan, ValueHeader, RoundBtn, SectionHeader, BtnSection, TimeSelect, ValueInput, SubmitSection, SubmitBtn, BottomMl, Icon, DataBox, GlassIcon, EditMlSpan, TimeSpan, ErrMessage, TimeInput } from './TodayListModal.styled';
const currentDate = adjustedTimeString.slice(0, 16);


const TodayListModal = ({title, onClose, data}) => {
  const [waterVolume, setWaterVolume] = useState(data?.waterVolume ?? 0);
  const [time, setTime] = useState(data?.time.slice(11, 16) ?? currentDate.slice(11, 16));
  const [inputValue, setInputValue] = useState(waterVolume);
  const [err, setErr] = useState(false);

  useEffect(() => {
    if (!data) {
      toastInfo('No notes yet.')
    }
  }, []);
  
  const addMl = () => {
    setErr(false);
    if (waterVolume >= MAX_VALUE) {
      return;
    }
        setWaterVolume(waterVolume + STEP);
        setInputValue(waterVolume + STEP);
  };

  const decreaseMl = () => {
        setErr(false);
    if (waterVolume <= STEP) {
      return;
    }
    setWaterVolume(waterVolume - STEP);
    setInputValue(waterVolume - STEP);
  };
  
  const handleBlur = evt => {
    const { value } = evt.currentTarget;
    if (value <= 0 || value > MAX_VALUE) {
      setErr(true);
      return;
    }
    setWaterVolume(Number(value));
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
  const customContentRenderer = () => (
    <TimeInput>{time}</TimeInput>
)

  const handleTimeChange = (values) => {
    if (values.length !== 0) {
      setTime(values[0].time)
    }
  }

  const dataSubmit = evt => {
    const finalTime = `${currentDate.slice(0, 11)}${time.slice(0, 5)}`;
    const fulldata = { date: currentDate, waterVolume, time: finalTime};
    evt.preventDefault();
    onClose();
    console.log(fulldata);
    }

  return (<>
    {data &&
  <DataBox>
    <GlassIcon>
      <use href={`${sprite}#icon-glass`}></use>
    </GlassIcon>
    <EditMlSpan>{waterVolume} ml</EditMlSpan>
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
                <Mlspan>{waterVolume}ml</Mlspan>
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
              contentRenderer={customContentRenderer}
              dropdownHandleRenderer={() => (<span></span>)}        
              required
    ></TimeSelect>
          <ValueHeader>
            Enter the value of the water used:
          </ValueHeader>
          <ValueInput
              id="waterVolume"
              type="number"
              value={inputValue}
              onChange={handleChange}
              onBlur={handleBlur}
              err={err.toString()}
           ></ValueInput>
        {err && <ErrMessage>* Enter amount of water between {MIN_VALUE} and {MAX_VALUE} ml.</ErrMessage>}  
      <SubmitSection>
          <BottomMl>{waterVolume}ml</BottomMl>
          <SubmitBtn
            type="submit"
            onClick={dataSubmit}
            disabled={time === "" || !waterVolume}
          >
            Save
          </SubmitBtn>
      </SubmitSection>
          
                  </>
                   )  
}

export default TodayListModal;
