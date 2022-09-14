import { readFileSync, writeFileSync } from 'fs';

import clockOneMinuteInterval from './ClockOneMinuteInterval';
import { Timer, WeekDay } from './Timer';
import { handleTimer } from './handleTimer';

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

export function updateTimers(timers: Timer[]) {
  clockOneMinuteInterval.clearAllTimer();
  
  timers.forEach(timer => {
    clockOneMinuteInterval.setTimer(() => {
      handleTimer(timer.weekDays, timer.time, timer.electricGroupName, timer.mode);
    });
  });
}

export function saveOnFlash(timers: Timer[]): void {
  try {
    writeFileSync('timers', JSON.stringify(timers));
  }
  catch {
    console.error('File \'Timers\' don\'t write on disk.');
  }
}

export function readFromFlash(): Timer[] {
  let read;
  let timers: Timer[] = [];

  try {
    read = readFileSync('timers');
  }
  catch {
    console.error('File \'timers\' don\'t read from disk.');
  }
  
  try {
    timers = JSON.parse(String(read));
  }
  catch {
    console.error('No valid readed data from file \'timers\'');
  }
  
  return timers;
}
