import { useState } from 'react';
import {
  ContainerOne,
  DailyNormaContainer,
  DailyNormaTitle,
  DailyNormaLiter,
  DailyNormaEdit,
  DailyNormaContainerMini,
  ImgWrapper,
  ImgBottle,
  ImgBottleTablet,
  ImgBottlePC,
} from './DailyNorma.styled.jsx';

export const DailyNorma = () => {
  const [normaWaterModal, setNormaWaterModal] = useState(false);
  const [normaWater, setNormaWater] = useState('1.5');

  const openModal = () => {
    setNormaWaterModal(true);
  };

  return (
    <ContainerOne>
      <DailyNormaContainer>
        <DailyNormaTitle>My daily norma</DailyNormaTitle>
        <DailyNormaContainerMini>
          {' '}
          <DailyNormaLiter>{normaWater} L</DailyNormaLiter>
          <DailyNormaEdit type="button" onClick={openModal}>
            Edit
          </DailyNormaEdit>
          {normaWaterModal && <div>Modal Window</div>}
          {/* Тут треба підставити нормальне вікно яке має відкриватися на My daily norma */}
        </DailyNormaContainerMini>
      </DailyNormaContainer>
      <ImgWrapper>
        <ImgBottlePC
          srcSet="/src/img/home@2x.png 2x"
          src="/src/img/home@1x.png"
          alt="bottle"
        />
        <ImgBottleTablet
          srcSet="/src/img/home_tab@2x.png 2x"
          src="/src/img/home_tab@1x.png"
          alt="bottle"
        />
        <ImgBottle
          srcSet="/src/img/home_mob@2x.png 2x"
          src="/src/img/home_mob@1x.png"
          alt="bottle"
        />
      </ImgWrapper>
    </ContainerOne>
  );
};
