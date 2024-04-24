import icons from 'img/icons.svg';
import React, { useState, useEffect } from 'react';
import {
  format,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isToday,
  isWithinInterval,
} from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';

// import monthWater from '../../date.json';

import {
  CalendarStyle,
  DateText,
  Day,
  Month,
  MonthNav,
  MonthSelectionContainer,
  NavBtn,
  PercentFromNorma,
  Title,
} from './MonthStatistic.styled';

import { getMonthWater } from '../../redux/water/waterOperations';
import { selectMonthWater } from '../../redux/water/waterSelectors';

export const MonthStatistic = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const monthWater = useSelector(selectMonthWater);

  const dispatch = useDispatch();

  const currentMonth = format(currentDate, 'MM');
  const currentYear = format(currentDate, 'yyyy');

  useEffect(() => {
    dispatch(getMonthWater({ currentYear, currentMonth }));
  }, [dispatch, currentDate]);

  const handleChangeMonth = (offset) => {
    setCurrentDate(
      (prevDate) =>
        new Date(prevDate.getFullYear(), prevDate.getMonth() + offset)
    );
  };

  const getMonthDays = (date) => {
    const month = {
      start: startOfMonth(date),
      end: endOfMonth(date),
    };

    return eachDayOfInterval(month);
  };

  const getBorderStyle = (percentage) => {
    if (percentage !== 0 && percentage < 100) {
      return 'border';
    } else if (percentage >= 100) {
      return 'border-green';
    }
  };

  const percentageWater = (date) => {
    const result = monthWater.find((item) => {
      const [day, month] = item.date.split(',');

      return day === format(date, 'd');
    })?.percentage;

    return result;
  };

  const btnDisabled = () => {
    if (
      format(new Date(), 'MM') === format(currentDate, 'MM') &&
      format(new Date(), 'yyyy') === format(currentDate, 'yyyy')
    ) {
      return true;
    }
    return false;
  };

  const futureDay = (date) => {
    const intrval = {
      start: new Date(2020, 0, 1),
      end: new Date(),
    };
    return !isWithinInterval(date, intrval);
  };

  return (
    <CalendarStyle>
      <MonthSelectionContainer>
        <Title>Month</Title>
        <MonthNav>
          <NavBtn onClick={() => handleChangeMonth(-1)}>
            <svg width="14" height="14">
              <use href={`${icons}#icon-arrow-left`}></use>
            </svg>
          </NavBtn>
          <DateText>
            {format(currentDate, 'MMMM')}, {currentYear}
          </DateText>
          <NavBtn onClick={() => handleChangeMonth(1)} disabled={btnDisabled()}>
            <svg width="14" height="14">
              <use href={`${icons}#icon-arrow-right`}></use>
            </svg>
          </NavBtn>
        </MonthNav>
      </MonthSelectionContainer>
      <Month>
        {getMonthDays(currentDate).map((date) => (
          <Day
            key={format(date, 'yyyy-MM-dd')}
            className={futureDay(date) && 'future-day'}
          >
            <button
              className={`calendarDayBtn ${isToday(date) && 'today'} ${
                getBorderStyle(percentageWater(date)) || ''
              }`}
            >
              {format(date, 'd')}
            </button>
            <PercentFromNorma>
              {percentageWater(date)?.toFixed(0) || 0}%
            </PercentFromNorma>
          </Day>
        ))}
      </Month>
    </CalendarStyle>
  );
};
