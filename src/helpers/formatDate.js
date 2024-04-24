import { addHours, format, parseISO, addMinutes } from 'date-fns';

export function formatTime(dateString, formatString = 'HH:mm') {
  const date = addHours(parseISO(dateString), -3);
  return format(date, formatString);
}

const currentDate = new Date();
const currentDay = format(currentDate, 'dd');
const currentMonth = format(currentDate, 'MMMM');
export const stringDate = `${currentDay}, ${currentMonth}`;
export const getTimeOptions = () => {
  const options = [];
  const baseTime = new Date();
  const timeFormat = 'hh:mm a';

  for (let i = 0; i < 24 * 60; i += 5) {
    const currentTime = addMinutes(baseTime, i);
    const time = format(currentTime, timeFormat);
    options.push({
      time,
      id: format(currentTime, 'HH:mm'),
    });
  }

  return options;
};
