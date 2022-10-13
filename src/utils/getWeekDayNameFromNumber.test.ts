import { WeekDay } from '../timer/TimerData';
import { getWeekDayNameFromNumber } from './getWeekDayNameFromNumber';

describe('getWeekDayNameFromNumber module:', () => {

  describe.each([
    [0, WeekDay.Sunday],
    [1, WeekDay.Monday],
    [2, WeekDay.Tuesday],
    [3, WeekDay.Wednesday],
    [4, WeekDay.Thursday],
    [5, WeekDay.Friday],
    [6, WeekDay.Saturday],
  ])('getWeekDayNameFromNumber(%i)', (dayNumber, dayName) => {
    it(`return ${dayName}`, () => {
      expect(getWeekDayNameFromNumber(dayNumber)).toBe(dayName);
    });
  });

  it('day > 6 should be throw Error', () => {
    expect(() => getWeekDayNameFromNumber(7)).toThrowError();
  });

  it('day < 0 should be throw Error', () => {
    expect(() => getWeekDayNameFromNumber(-2)).toThrowError();
  });
});
