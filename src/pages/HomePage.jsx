import { BottleImg, ContentWraper, HomePageSection } from './HomePage.styled.jsx';
import { DailyNorma } from 'components/DailyNorma/DailyNorma.jsx';
import { WaterRatio } from 'components/WaterRatio/WaterRatio.jsx';
import { TodayWaterList } from 'components/TodayWaterList/TodayWaterList.jsx';

import { BackgroundContainer } from './HomePage.styled.jsx';


const HomePage = () => {
  return (
    <BackgroundContainer>
      <HomePageSection>
        <ContentWraper>
          <DailyNorma/>
          <BottleImg/>
          <WaterRatio/>
        </ContentWraper>
        <ContentWraper  className="today-panel">
          <TodayWaterList/>
          {/* <div className="MonthStatistic">
            <div className='CalendarStyle'>
              <div className="header">
                <span className="sectionText">Month</span>
                <div className="monthNav">
                  <button
                    className="navBtn"
                    onClick={() => console.log("-1")}
                  >
                    <svg width="14" height="14">
                      <use href={`${icons}#icon-arrow-left`}></use>
                    </svg>
                  </button>
                  <h2 className="dateText">
                  April,2024
                  </h2>
                  <button
                    className="navBtn"
                    onClick={() => console.log("1")}
                  >
                    <svg width="14" height="14">
                      <use href={`${icons}#icon-arrow-right`}></use>
                    </svg>
                  </button>
                </div>
              </div>
              <ul className="month">
                {console.log(getMonthDays(currentDate))}
                {getMonthDays(currentDate).map((date) => (
                  <li key={format(date, 'yyyy-MM-dd')} className="day">
                    <button
                      className={`calendarDayBtn ${
                        isToday(date) ? 'today' : ''
                      } ${getBorderStyle(
                        monthWater.find(
                          (item) =>
                            getFormattedDateWithTime(new Date(item._id)) ===
                            getFormattedDateWithTime(date)
                        )?.persent
                      )}`}
                    >
                      {format(date, 'd')}
                    </button>
                    <p className="progressWaterText">
                      {monthWater
                        .find(
                          (item) =>
                            getFormattedDateWithTime(new Date(item._id)) ===
                            getFormattedDateWithTime(date)
                        )
                        ?.persent.toFixed(0) || 0}
                      %
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div> */}
        </ContentWraper>
      </HomePageSection>
</BackgroundContainer>
  );
};

export default HomePage;
