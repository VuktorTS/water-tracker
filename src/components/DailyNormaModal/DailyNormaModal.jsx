import { useState, useEffect } from "react";
import {
  Backdrop, ButtonClose, CloseIcon, Container, ModalBody, TitleModal,
  AllFormulesDiv,
  FormulesDiv,
  Formule,
  BodyFormules,
  AdditInfo,
  PAdditInfo,
  SpanAdditInfo,
  Form,
  TitleForm,
  RadioDiv,
  InpDiv
} from "./DailyNormaModal.styled";
import InputDaNormMod from "../InputDaNormMod/InputDaNormMod";
import icons from "img/icons.svg"

const DailyNormaModal = () => {
  const [weight, setWeight] = useState(0);
  const [hours, setHours] = useState(0);

  const onChangeW = (e) => {
    setWeight(e.currentTarget.value);
    console.log('e.currentTurget.value: ', e.currentTarget.value);
  };

  const onChangeH = (e) => {
    setHours(e.currentTarget.value);
    console.log('e.currentTurget.value: ', e.currentTarget.value);
  };

  const onClose = () => {
    console.log(1);
  };

  useEffect(() => {
    const onEscPress = e => {
      if (e.code === 'Escape')  onClose();
    };

    window.addEventListener('keydown', onEscPress);

    return () => {
      window.removeEventListener('keydown', onEscPress);
    };
  }, []);

  const handleClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (

    <Backdrop onClick={handleClick}>
      <Container>
        <TitleModal>My daily norma</TitleModal>
        <ButtonClose
          type="button"
          onClick={onClose}
          aria-label="Close"
        >
            <CloseIcon>
              <use href={`${icons}#icon-outline`}></use>
            </CloseIcon>
        </ButtonClose>
        <ModalBody>
      <AllFormulesDiv>
        <FormulesDiv>
          <Formule>For girl: <BodyFormules>V=(M*0,03) + (T*0,4)</BodyFormules></Formule>
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
          <InputDaNormMod type='radio' name='gender' value="woman" textInp='For woman' checked={true} height='14px' width='14px'/>
          <InputDaNormMod type='radio' name='gender' value="man" textInp='For man' height='14px' width='14px'/>
        </RadioDiv>
        <InpDiv>
        <InputDaNormMod
          title='Your weight in kilograms:'
          type='number'
          name='gender'
          value={weight}
          onChange={onChangeW}
        />
        <InputDaNormMod
          title="The time of active participation in sports or other activities with a high physical. load in hours:"
          type='number'
          name='gender'
          value={hours}
          onChange={onChangeH}
        />
          </InpDiv>
          
        <TitleForm>Write down how much water you will drink:</TitleForm>
      </Form>
        </ModalBody>
      </Container>
    </Backdrop>
  )
};

export default DailyNormaModal;