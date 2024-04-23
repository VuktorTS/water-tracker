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
import { getCurrUserParams } from '../redux/auth/authOperations.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getMonthWater, getTodayWater } from '../redux/water/waterOperations.js';
import { format } from 'date-fns';
import { selectMonthWater } from '../redux/water/waterSelectors.js';


const HomePage = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getTodayWater())
    dispatch(getCurrUserParams());
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
