import { stringDate } from './formatDate';
import { assignValues } from './objectOperations';

export const editWaterEntry = (today, newPortion) => {
  const oldPortion = today.find((portion) => portion._id === newPortion._id);
  assignValues(newPortion, oldPortion);
};

export const deleteWaterEntry = (today, deletedPortion) => {
  const newToday = today.filter(
    (portion) => portion._id !== deletedPortion._id
  );
  return newToday;
};

export const findConsuption = (today) => {
  return today
    .map((portion) => portion.waterVolume)
    .reduce((prevAmount, currAmount) => prevAmount + currAmount, 0);
};

export const changePercentage = (monthArr, portion) => {
  const todayObj = monthArr.find((obj) => obj.date === stringDate);
  todayObj.percentage = portion.percentage;
};

export const changeMonthOnAdd = (monthArr, portion) => {
  if (monthArr.length > 0) {
    const todayObj = monthArr.find((obj) => obj.date === stringDate);
    todayObj.percentage = portion.percentage;
    todayObj.numberOfEntries += 1;
  } else {
    const waterNormMl = JSON.parse(
      JSON.parse(localStorage.getItem('persist:auth')).user
    ).dailyWaterNorm;
    const dailyWaterNorm = `${waterNormMl / 1000} L`;
    const todayData = {
      date: stringDate,
      dailyWaterNorm,
      percentage: portion.percentage,
      numberOfEntries: 1,
    };
    monthArr.push(todayData);
  }
};

export const changeMonthOnDelete = (monthArr, portion) => {
  const todayObj = monthArr.find((obj) => obj.date === stringDate);
  todayObj.percentage = portion.percentage;
  todayObj.numberOfEntries -= 1;
};
