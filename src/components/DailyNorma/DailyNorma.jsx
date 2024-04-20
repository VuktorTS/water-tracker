import { BtnContainer, DailyNormaContainer, DailyTitle, DailyWaterNorma, EditWaterBtn } from "./DailyNorma.styled";

export const DailyNorma = () => {
  return (
    <DailyNormaContainer>
      <DailyTitle>My daily norma</DailyTitle>
      <BtnContainer>
        <DailyWaterNorma>1.5 L</DailyWaterNorma>
        <EditWaterBtn type="button" onClick={()=>{console.log("edit norma")}}>Edit</EditWaterBtn>
      </BtnContainer>
    </DailyNormaContainer>
  );
};
