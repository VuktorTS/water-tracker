import { useState } from 'react';
import {
  ContainerOne,
  DailyNormaContainer,
  DailyNormaTitle,
  DailyNormaLiter,
  DailyNormaEdit,
  DailyNormaContainerMini,
  ImgWrapper,
} from './DailyNorma.styled';

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
        <picture>
          <source
            srcSet="/src/img/home@1x.png 1x, /src/img/home@2x.png 2x"
            media="(min-width: 1440px)"
          />
          <source
            srcSet="/src/img/home_tab@1x.png 1x, /src/img/home_tab@2x.png 2x"
            media="(min-width: 768px)"
          />
          <source
            srcSet="/src/img/home_mob@1x.png 1x, /src/img/home_mob@2x.png 2x"
            media="(min-width: 320px)"
          />
          <img src="/src/img/home_mob@1x.png" alt="bottle" />
        </picture>
      </ImgWrapper>
    </ContainerOne>
  );
};
