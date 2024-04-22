import {
  BottleImg,
  ContentWraper,
  HomePageSection,
} from './HomePage.styled.jsx';
import { DailyNorma } from 'components/DailyNorma/DailyNorma.jsx';
import { WaterRatio } from 'components/WaterRatio/WaterRatio.jsx';
import { TodayWaterList } from 'components/TodayWaterList/TodayWaterList.jsx';

import { BackgroundContainer } from './HomePage.styled.jsx';
import { MonthStatistic } from 'components/MonthStatistic/MonthStatistic.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getMonthWater, getTodayWater } from '../redux/water/waterOperations.js';
import { format } from 'date-fns';
import { selectMonthWater } from '../redux/water/waterSelectors.js';


const HomePage = () => {
  const dispatch = useDispatch();  
  const currentMonth = format(new Date(), 'M');
  const currentYear = format(new Date(), 'yyyy');


  useEffect(() => {
    dispatch(getTodayWater())
    dispatch(getMonthWater({currentYear, currentMonth}));
  }, [dispatch]);

  return (
    <BackgroundContainer>
      <HomePageSection>
        <ContentWraper>
          <DailyNorma />
          <BottleImg />
          <WaterRatio />
        </ContentWraper>
        <ContentWraper className="today-panel">
          <TodayWaterList />
          <MonthStatistic />
        </ContentWraper>
      </HomePageSection>
    </BackgroundContainer>
  );
};

export default HomePage;
