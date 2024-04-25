import {
  BottleImg,
  ContentWraper,
  HomePageSection,
} from './HomePage.styled.jsx';
import { DailyNorma } from 'components/DailyNorma/DailyNorma.jsx';
import { TodayWaterList } from 'components/TodayWaterList/TodayWaterList.jsx';

import { BackgroundContainer } from './HomePage.styled.jsx';
import { MonthStatistic } from 'components/MonthStatistic/MonthStatistic.jsx';
// import { getCurrUserParams } from '../redux/auth/authOperations.js';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';

// import { getTodayWater } from '../redux/water/waterOperations.js';
import { ProgressBar } from 'components/ProgressBar/ProgressBar.jsx';


const HomePage = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //           dispatch(getTodayWater())
  //           dispatch(getCurrUserParams());
  // }, [dispatch]);

  return (
    <BackgroundContainer>
      <HomePageSection>
        <ContentWraper style={{paddingBottom: 25}}>
          <DailyNorma />
          <BottleImg />
          <ProgressBar />
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
