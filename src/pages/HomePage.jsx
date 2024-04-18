import ModalWrapper from '../components/ModalWrapper/ModalWrapper.jsx';
import AddWaterModal from '../components/AddWaterModal/AddWaterModal.jsx';
import icons from 'img/icons.svg';
import React, { useState } from 'react';
import { eachDayOfInterval, endOfMonth, format, formatDate, isToday, startOfMonth } from 'date-fns';
import monthWater from "../date.json"

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
];
const getFormattedDateWithTime = date => {
  console.log("🚀 ~ getFormattedDateWithTime ~ date:", date)  
return formatDate(new Date(date.setHours(0, 0, 0, 0)));}

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
      <section className="HomePageSection">
        <div className="ContentWraper">
          <div className="DeliNorma">
            <h2 className="DeliTitle">My daily norma</h2>
            <div className="DeliWaterNorma">1.5 L</div>
            <button type="button" className="EditWaterBtn">
              Edit
            </button>
          </div>
          <img src="" className="BottleImg" alt="" />
          <div className="WaterRatioContainer">
            <div className="WaterRangeContainer">
              <h3 className="WaterRangeTitle">Today</h3>
              <input
                type="range"
                readOnly={true}
                style={{ marginRight: '2em' }}
                aria-label="Water range"
                value={0}
              />
              <div className="RateContainer">
                <span className="StartMark">0%</span>
                <span className="MainMark" style={{ marginRight: '2em' }}>
                  50%
                </span>
                <span className="EndMark">100%</span>
              </div>
            </div>
            <button type="button" onClick={onOpen}>
              <svg>
                <use href={`${icons}#icon-add-button`}></use>
              </svg>
              addWater
            </button>
          </div>
        </div>
        <div className="ContentWraper">
          <div className="TodayWaterList">
            <div className="TodayContainer">
              <h2 className="TodayTitle">Today</h2>
              <ul className="TodayList">
                {waterList.map((item) => (
                  <li className="TodayItem" key={item.id}>
                    <div className="TodayInfo">
                      <svg className="TodayClass">
                        <use href={`${icons}#icon-glass`}></use>
                      </svg>
                      <p className="TodayValue">{`${item.waterVolume} ml`}</p>
                      <p className="TodayTime">{item.time}</p>
                    </div>
                    <div className="TodayTools">
                      <button
                        className="ButtonChange"
                        onClick={() => console.log("edit")}
                      >
                        <svg>
                          <use href={`${icons}#icon-edit`}></use>
                        </svg>
                      </button>
                      <button
                        className="ButtonDelete"
                        onClick={() => console.log("delete")}
                      >
                        <svg>
                          <use href={`${icons}#icon-delete`}></use>
                        </svg>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <button className="AddWaterBtn" onClick={console.log("add")}>
                <svg>
                  <use href={`${icons}#icon-add`}></use>
                </svg>
                addWater
              </button>
            </div>
          </div>
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
        </div>
      </section>

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
