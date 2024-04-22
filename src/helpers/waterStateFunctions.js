import { assignValues } from './objectOperations';

export const editWaterEntry = (today, newPortion) => {
  const oldPortion = today.find((portion) => portion._id === newPortion._id);
  assignValues(newPortion, oldPortion);
};

export const findConsuption = (today) => {
  return today
    .map((portion) => portion.waterVolume)
    .reduce((prevAmount, currAmount) => prevAmount + currAmount, 0);
};
