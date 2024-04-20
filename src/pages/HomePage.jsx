import { DailyNorma } from '../components/DailyNorma/DailyNorma.jsx';
import { WaterRatioPanel } from '../components/WaterRatioPanel/WaterRatioPanel.jsx';
import { BoxHome, HomeSection } from './HomePage.styled.jsx';

const HomePage = () => {
  return (
    <HomeSection>
      <BoxHome>
        <div>
          <DailyNorma />
          <WaterRatioPanel />
        </div>
        {/* <HomeStatistics>
          <TodayWaterList />
          <MonthStatsTable />
        </HomeStatistics> */}
      </BoxHome>
    </HomeSection>
  );
};

export default HomePage;
