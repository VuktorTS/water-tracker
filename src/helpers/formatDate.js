import { addHours, format, parseISO } from 'date-fns';

export function formatTime(dateString, formatString = 'HH:mm') {
  const date = addHours(parseISO(dateString), -3);
  return format(date, formatString);
}
