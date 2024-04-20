import icons from 'img/icons.svg';
import React, { useState, useEffect } from 'react';
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isToday,
} from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import monthWater from '../../date.json';
import { CalendarStyle, DateText, Day, Month, MonthNav, MonthSelectionContainer, NavBtn, PercentFromNorma, Title } from './MonthStatistic.styled';
export const MonthStatistic = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const formatDate = (dateString, formatString = 'yyyy-MM-dd ') => {
    const date = new Date(dateString);
    return format(date, formatString);
  };

  const getMonthDays = (date) => {
    const month = {
      start: startOfMonth(date),
      end: endOfMonth(date),
    };

    return eachDayOfInterval(month);
  };
  const getBorderStyle = (percentage) => {
    console.log("🚀 ~ getBorderStyle ~ percentage:", percentage)
    if (percentage !== 0 && percentage < 100) {
        console.log("border")
      return 'border';
    } else if (percentage >= 100) {
        console.log("border-green")
      return 'border-green';
    }
  };

  const percentageWater = (monthWater, date)=>{
    // console.log(isToday(date))
    const result =  monthWater.find(
        (item) =>
          getFormattedDateWithTime(new Date(item._id)) ===
          getFormattedDateWithTime(date)
      )?.persent
    //   console.log("🚀 ~ percentageWater ~ result:", result)
      return result;
  }
  const getFormattedDateWithTime = (date) =>
    formatDate(new Date(date.setHours(0, 0, 0, 0)));

    const currentMonth = format(currentDate, 'MMMM');
    const currentYear = format(currentDate, 'yyyy');

  return (
    <CalendarStyle>
      <MonthSelectionContainer>
        <Title>Month</Title>
        <MonthNav>
          <NavBtn onClick={() => console.log('-1')}>
            <svg width="14" height="14">
              <use href={`${icons}#icon-arrow-left`}></use>
            </svg>
          </NavBtn>
          <DateText>{currentMonth},{currentYear}</DateText>
          <NavBtn onClick={() => console.log('1')}>
            <svg width="14" height="14">
              <use href={`${icons}#icon-arrow-right`}></use>
            </svg>
          </NavBtn>
        </MonthNav>
      </MonthSelectionContainer>
      <Month>
        {getMonthDays(currentDate).map((date) => (
          <Day key={format(date, 'yyyy-MM-dd')}>
            <button
              className={`calendarDayBtn ${
                isToday(date) ? 'today' : ''
              } ${getBorderStyle(percentageWater(monthWater, date)) || ""}`}
            >
              {format(date, 'd')}
            </button>
            <PercentFromNorma>
              {percentageWater(monthWater, date).toFixed(0) || 0}
              %
            </PercentFromNorma>
          </Day>
        ))}
      </Month>
    </CalendarStyle>
  );
};
