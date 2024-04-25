import { addHours, format, parseISO, addMinutes, startOfDay } from 'date-fns';

export function formatTime(dateString, formatString = 'p') {
  const date = addHours(parseISO(dateString), -3);
  return format(date, formatString);
}

const currentDate = new Date();
const currentDay = format(currentDate, 'dd');
const currentMonth = format(currentDate, 'MMMM');

export const stringDate = `${currentDay}, ${currentMonth}`;

export const getTimeOptions = () => {
  const options = [];
  const baseTime = startOfDay(new Date());
  const currentTime = new Date(); // Current time
  const timeFormat = 'hh:mm a';

  for (let i = 0; i < 1440; i += 5) {
    const currentIterationTime = addMinutes(baseTime, i);
    if (currentIterationTime > currentTime) break;
    const time = format(currentIterationTime, timeFormat);
    options.push({
      time,
      id: format(currentIterationTime, 'HH:mm'),
    });
  }

  return options;
};
