import { WeekDay } from '../timer/TimerData';

export const getWeekDayNameFromNumber = (dayNumber: number): WeekDay => {
  switch(dayNumber) {
  case 0: return WeekDay.Sunday;
  case 1: return WeekDay.Monday;
  case 2: return WeekDay.Tuesday;
  case 3: return WeekDay.Wednesday;
  case 4: return WeekDay.Thursday;
  case 5: return WeekDay.Friday;
  case 6: return WeekDay.Saturday;
  default: throw Error('Day number is incorect');
  }
};
