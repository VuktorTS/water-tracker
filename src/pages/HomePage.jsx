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

const HomePage = () => {
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
