import { useState } from "react";
import { BtnContainer, DailyNormaContainer, DailyTitle, DailyWaterNorma, EditWaterBtn } from "./DailyNorma.styled";
import DailyNormaModal from '../DailyNormaModal/DailyNormaModal';
import { useSelector } from "react-redux";
import { getUser } from "../../redux/auth/authSelectors";

export const DailyNorma = () => {
  const dailyWaterNorm = useSelector(getUser).dailyWaterNorm/1000;
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <DailyNormaContainer>
      <DailyTitle>My daily norma</DailyTitle>
      <BtnContainer>
        <DailyWaterNorma>{dailyWaterNorm ? dailyWaterNorm : 1.5} L</DailyWaterNorma>
        <EditWaterBtn type="button" onClick={() => {setModalOpen(true)}}>Edit</EditWaterBtn>
      </BtnContainer>
    </DailyNormaContainer>
      {modalOpen && <DailyNormaModal closeMod={() => {setModalOpen(false)}} />}
    </>
  );
};
