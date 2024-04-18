import { format } from 'date-fns';

export const formatDate = date => {
  return format(new Date(date), 'p');
};

export const formatCurrentDate = (date = new Date()) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  return { year: year.toString(), month: month.toString() };
};
