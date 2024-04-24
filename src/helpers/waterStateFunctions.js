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
