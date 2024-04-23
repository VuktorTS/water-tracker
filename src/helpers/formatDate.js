import { addHours, format, parseISO, addMinutes, startOfHour } from 'date-fns';

export function formatTime(dateString, formatString = 'HH:mm') {
  const date = addHours(parseISO(dateString), -3);
  return format(date, formatString);
}

export const getTimeOptions = () => {
  const options = [];
  const baseTime = startOfHour(new Date());
  const timeFormat = 'hh:mm a';

  const currentMinute = baseTime.getMinutes();
  const nearestMultipleOfFive = Math.ceil(currentMinute / 5) * 5;

  for (let i = nearestMultipleOfFive; i < 60; i += 5) {
    const currentTime = addMinutes(baseTime, i);
    const time = format(currentTime, timeFormat);
    options.push({
      time,
      id: format(currentTime, 'HH:mm'),
    });
  }

  return options;
};
