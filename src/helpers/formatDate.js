import { addHours, format, parseISO } from 'date-fns';

export function formatTime(dateString, formatString = 'HH:mm') {
  const date = addHours(parseISO(dateString), -3);
  return format(date, formatString);
}

const currentDate = new Date();
const currentDay = format(currentDate, 'dd');
const currentMonth = format(currentDate, 'MMMM');
export const stringDate = `${currentDay}, ${currentMonth}`;
