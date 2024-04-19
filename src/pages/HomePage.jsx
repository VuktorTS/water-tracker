import ModalWrapper from 'components/ModalWrapper/ModalWrapper.jsx';

import React, { useState } from 'react';
import { eachDayOfInterval, endOfMonth, format, formatDate, isToday, startOfMonth } from 'date-fns';
import monthWater from "../date.json"
import { BottleImg, ContentWraper, HomePageSection } from './HomePage.styled.jsx';
import { DailyNorma } from 'components/DailyNorma/DailyNorma.jsx';
import { WaterRatio } from 'components/WaterRatio/WaterRatio.jsx';
import { TodayWaterList } from 'components/TodayWaterList/TodayWaterList.jsx';


const getFormattedDateWithTime = date => {
  console.log("🚀 ~ getFormattedDateWithTime ~ date:", date)  
return formatDate(new Date(date.setHours(0, 0, 0, 0)));}

const MODAL_TYPES = { ADD: "ADD", EDIT: "EDIT" };
const data = {time: '07:15 AM', ml: 250, id: 9843576}

const HomePage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
  };
  const onOpen = () => {
    setIsOpen(true);
  };
  const getMonth = date => {
    return {
      start: startOfMonth(date),
      end: endOfMonth(date),
    };
  };

  const getMonthDays = date => {
    const { start, end } = getMonth(date);

    return eachDayOfInterval({ start, end });
  };
  const getBorderStyle = percentage => {
    if (percentage !== 0 && percentage < 100) {
      return 'border';
    } else if (percentage >= 100) {
      return 'border-green';
    }
  };
  const formatDate = (dateString, formatString = 'yyyy-MM-dd ') => {
    const date = new Date(dateString);
    return format(date, formatString);
  }
  return (
    <>
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

      <div>
        {isOpen && (
          <ModalWrapper onClose={onClose} title="Add water">
            <AddWaterModal></AddWaterModal>
          </ModalWrapper>
        )}
      </div>
    </>
  );
};

export default HomePage;
