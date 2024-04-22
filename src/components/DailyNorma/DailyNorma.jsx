import { useState } from "react";
import { BtnContainer, DailyNormaContainer, DailyTitle, DailyWaterNorma, EditWaterBtn } from "./DailyNorma.styled";
import DailyNormaModal from '../DailyNormaModal/DailyNormaModal';

export const DailyNorma = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <DailyNormaContainer>
      <DailyTitle>My daily norma</DailyTitle>
      <BtnContainer>
        <DailyWaterNorma>1.5 L</DailyWaterNorma>
        <EditWaterBtn type="button" onClick={() => {setModalOpen(true)}}>Edit</EditWaterBtn>
      </BtnContainer>
    </DailyNormaContainer>
      {modalOpen && <DailyNormaModal closeMod={() => {setModalOpen(false)}} />}
    </>
  );
};
