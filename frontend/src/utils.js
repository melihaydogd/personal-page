import { format, subMonths } from "date-fns";

export const getMonthAndYear = (date) => {
  return date ? format(subMonths(new Date(date), 1), "MMM yyyy") : null;
};

export const getYear = (date) => {
  return date ? format(subMonths(new Date(date), 1), "yyyy") : null;
};
