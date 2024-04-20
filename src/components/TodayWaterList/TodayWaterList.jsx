import {
  AddWaterBtn,
  ButtonDelete,
  ButtonEdit,
  TodayClass,
  TodayContainer,
  TodayInfo,
  TodayItem,
  TodayList,
  TodayTime,
  TodayTitle,
  TodayTools,
  TodayValue,
} from './TodayWaterList.styled';
import icons from 'img/icons.svg';


const waterList = [
  {
    id: 1,
    waterVolume: 100,
    time: '1:05 PM',
  },
  {
    id: 2,
    waterVolume: 150,
    time: '3:05 PM',
  },
  {
    id: 3,
    waterVolume: 300,
    time: '5:05 PM',
  },
  {
    id: 4,
    waterVolume: 250,
    time: '8:05 PM',
  },
  {
    id: 5,
    waterVolume: 250,
    time: '8:05 PM',
  },
];
export const TodayWaterList = () => {
  return (
    <TodayContainer>
      <TodayTitle>Today</TodayTitle>
      <TodayList>
        {waterList.map((item) => (
          <TodayItem key={item.id}>
            <TodayInfo>
              <TodayClass>
                <use href={`${icons}#icon-glass`}></use>
              </TodayClass>
              <TodayValue>{`${item.waterVolume} ml`}</TodayValue>
              <TodayTime>{item.time}</TodayTime>
            </TodayInfo>
            <TodayTools>
              <ButtonEdit onClick={() => console.log('edit')}>
                <svg>
                  <use href={`${icons}#icon-edit`}></use>
                </svg>
              </ButtonEdit>
              <ButtonDelete onClick={() => console.log('delete')}>
                <svg>
                  <use href={`${icons}#icon-delete`}></use>
                </svg>
              </ButtonDelete>
            </TodayTools>
          </TodayItem>
        ))}
      </TodayList>
      <AddWaterBtn onClick={()=>console.log('add')}>
        <svg>
          <use href={`${icons}#icon-add`}></use>
        </svg>
        addWater
      </AddWaterBtn>
    </TodayContainer>
  );
};
