import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { MAX_VALUE, MIN_VALUE, STEP } from '../../constants/addWater';
import { adjustedTimeString } from '../../constants/currentDate';
import { addWater, editWater } from '../../redux/water/waterOperations';
import { toastInfo } from '../../services/notification';
import EditData from '../EditData/EditData';
import TimeForm from '../TimeForm/TimeForm';
import WaterForm from '../WaterForm/WaterForm';
import { ValueHeader, SectionHeader,  ValueInput, SubmitSection, SubmitBtn, BottomMl, ErrMessage } from './TodayListModal.styled';
const currentDate = adjustedTimeString.slice(0, 16);


const TodayListModal = ({title, onClose, data }) => {
  const [waterVolume, setWaterVolume] = useState(data?.waterVolume ?? 0);
  const [time, setTime] = useState(data?.time.slice(11, 16) ?? currentDate.slice(11, 16));
  const [inputValue, setInputValue] = useState(waterVolume);
  const [err, setErr] = useState(false);
  const dispatch = useDispatch();

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

  const handleTimeChange = (values) => {
    if (values.length !== 0) {
      setTime(values[0].time)
    }
  }

  const dataSubmit = evt => {
    evt.preventDefault();
    const finalTime = `${currentDate.slice(0, 11)}${time.slice(0, 5)}`;
    if (!data) {
      const fulldata = { date: finalTime, waterVolume, time: finalTime };
      dispatch(addWater(fulldata))
    }
    if (data) {
      const fulldata = { waterVolume, time: finalTime, _id: data._id};
       console.log(fulldata);
      dispatch(editWater(fulldata))
    }
    onClose();
    }

  return (<>
    {data && <EditData waterVolume={waterVolume} time={time}></EditData>}
    <ValueHeader>{title}</ValueHeader>
    <SectionHeader>Amount of water:</SectionHeader>
    <WaterForm decreaseMl={decreaseMl} addMl={addMl} waterVolume={waterVolume}></WaterForm>
    <SectionHeader>Recording time:</SectionHeader>
    <TimeForm time={time} handleTimeChange={handleTimeChange}></TimeForm>
    <ValueHeader>Enter the value of the water used:</ValueHeader>
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
        disabled={!waterVolume}>
        Save
      </SubmitBtn>
    </SubmitSection>
  </>
  )  
}

export default TodayListModal;