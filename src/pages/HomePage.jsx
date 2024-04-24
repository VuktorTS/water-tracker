import {
  BottleImg,
  ContentWraper,
  HomePageSection,
} from './HomePage.styled.jsx';
import { DailyNorma } from 'components/DailyNorma/DailyNorma.jsx';
import { WaterRatio } from 'components/WaterRatio/WaterRatio.jsx';
import { TodayWaterList } from 'components/TodayWaterList/TodayWaterList.jsx';

import axios from 'axios';

import { BackgroundContainer } from './HomePage.styled.jsx';
import { MonthStatistic } from 'components/MonthStatistic/MonthStatistic.jsx';
import { getCurrUserParams } from '../redux/auth/authOperations.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getToken } from '../redux/auth/authSelectors.js';
import { setToken, setIsLoggedIn } from '../redux/auth/authSlice.js';

import { getMonthWater, getTodayWater } from '../redux/water/waterOperations.js';
import { format } from 'date-fns';
import { selectMonthWater } from '../redux/water/waterSelectors.js';


const HomePage = () => {
  const dispatch = useDispatch();
  const token = useSelector(getToken);
  const firstToken = new URLSearchParams(window.location.search).get('token');

  
  useEffect(() => {
    // if (firstToken) {
    //     axios.defaults.headers.common.Authorization = `Bearer ${firstToken}`;
    //         dispatch(setToken(firstToken));
            dispatch(getTodayWater())
            dispatch(getCurrUserParams());
    // } else if (token) {
    //         axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    //         dispatch(getTodayWater())
    //         dispatch(getCurrUserParams());
    // } else {
    //   dispatch(setIsLoggedIn(false));
    // }
  }, [dispatch, firstToken, token]);

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
