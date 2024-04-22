import { useState, useEffect } from "react";
import {
  Backdrop, ButtonClose, CloseIcon, Container, ModalBody, TitleModal, AllFormulesDiv, FormulesDiv, Formule,
  BodyFormules, AdditInfo, PAdditInfo, SpanAdditInfo, Form, TitleForm, RadioDiv, InpDiv, Result, ValueResult,
  DivButton, Button
} from "./DailyNormaModal.styled";
import InputDaNormMod from "../InputDaNormMod/InputDaNormMod";
import icons from "img/icons.svg"
import { setCurrentUser } from "../../redux/auth/authOperations";
import { useDispatch, useSelector } from "react-redux";
import { error } from "../../redux/auth/authSelectors";

const DailyNormaModal = ({ closeMod }) => {
  const disp = useDispatch();
  const [weight, setWeight] = useState(0);
  const [hours, setHours] = useState(0);
  const [willDr, setWillDr] = useState(0);
  const [result, setResult] = useState(0);
  const [selectedGender, setSelectedGender] = useState('girl');
  const [endWorkWithMod, setEndWorkWithMod] = useState(false);
  const err = useSelector(error);

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };

  const refactValue = (e) => { 
    let newVal = e.currentTarget.value.replace(/[^0-9.]/g, '');
    if (newVal.length > 1 && newVal[0] === '0' && newVal[1] !== '.') {
        newVal = newVal.slice(1);
    }
    return newVal
  };

  const onChangeW = (e) => {
    const newVal = refactValue(e);
    setWeight(newVal);
  };

  const onChangeH = (e) => {
    const newVal = refactValue(e);
    setHours(newVal);
  };

  const onChangeWillDr = (e) => {
    const newVal = refactValue(e);
    setWillDr(newVal);
  };

  const handelClickButton = (e) => {
    e.preventDefault();
    const currentData = { dailyWaterNorm: result };
    disp(setCurrentUser(currentData));
    setEndWorkWithMod(true);
  };

  useEffect(() => { 
    if (selectedGender === 'girl') {
      const resGirl = ((weight * 0.03) + (hours * 0.4)).toFixed(2);
      setResult(resGirl)
    } else {
      const resMan = ((weight * 0.04) + (hours * 0.6)).toFixed(2);
      setResult(resMan)
    }
  }, [selectedGender, weight, hours]);

  useEffect(() => {
    if(endWorkWithMod && !err){
      closeMod()
    };

    const onEscPress = e => {
      if (e.code === 'Escape')  closeMod();
    };

    window.addEventListener('keydown', onEscPress);

    return () => {
      window.removeEventListener('keydown', onEscPress);
    };
  }, [closeMod, endWorkWithMod, err]);

  const handleClick = e => {
    if (e.target === e.currentTarget) {
      closeMod();
    }
  };

  return (

    <Backdrop onClick={handleClick}>
      <Container>
        <TitleModal>My daily norma</TitleModal>
        <ButtonClose
          type="button"
          onClick={closeMod}
          aria-label="Close"
        >
            <CloseIcon>
              <use href={`${icons}#icon-outline`}></use>
            </CloseIcon>
        </ButtonClose>
        <ModalBody>
      <AllFormulesDiv>
        <FormulesDiv>
          <Formule>For woman: <BodyFormules>V=(M*0,03) + (T*0,4)</BodyFormules></Formule>
        </FormulesDiv>
        <FormulesDiv>
          <Formule>For man: <BodyFormules>V=(M*0,04) + (T*0,6)</BodyFormules></Formule>
        </FormulesDiv>
      </AllFormulesDiv>
      <AdditInfo>
        <PAdditInfo><SpanAdditInfo>*</SpanAdditInfo> V is the volume of the water norm in liters per day, M is your body weight, T is the time of active sports, or another type of activity commensurate in terms of loads (in the absence of these, you must set 0)</PAdditInfo>
      </AdditInfo>
      <Form>
        <TitleForm>Calculate your rate:</TitleForm>
        <RadioDiv>
          <InputDaNormMod 
          type='radio' 
          name='gender' 
          value="girl" 
          textInp='For woman' 
          checked={selectedGender === 'girl'} 
          onChange={handleGenderChange}
          height='14px' 
          width='14px' 
          gap='8px' />
          <InputDaNormMod 
          type='radio' 
          name='gender' 
          value="man" 
          textInp='For man' 
          checked={selectedGender === 'man'}
          onChange={handleGenderChange}
          height='14px' 
          width='14px' 
          gap='8px' />
        </RadioDiv>
        <InpDiv>
        <InputDaNormMod
          title='Your weight in kilograms:'
          type='text'
          name='weight'
          value={weight}
          onChange={onChangeW}
        />
        <InputDaNormMod
          title="The time of active participation in sports or other activities with a high physical. load in hours:"
          type='text'
          name='hours'
          value={hours}
          onChange={onChangeH}
        />
            </InpDiv>
            <Result>
              <Formule>The required amount of water in liters per day:</Formule>
              <ValueResult>{ result } L</ValueResult>
            </Result>
            <TitleForm>Write down how much water you will drink:</TitleForm>
            <InputDaNormMod
          type='text'
          name='willDr'
          value={willDr}
          onChange={onChangeWillDr}
            />
            <DivButton>
              <Button onClick={handelClickButton}>
                Save
              </Button>
            </DivButton>
      </Form>
        </ModalBody>
      </Container>
    </Backdrop>
  )
};

export default DailyNormaModal;