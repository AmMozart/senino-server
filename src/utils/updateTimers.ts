import { writeFileSync } from 'fs';

import clockOneMinuteInterval from '../timer/ClockOneMinuteInterval';
import { Timer } from '../timer/Timer';
import { handleTimer } from '../timer/handleTimer';

export function updateTimers(timers: Timer[]) {
  clockOneMinuteInterval.clearAllTimer();
  
  timers.forEach(timer => {
    clockOneMinuteInterval.setTimer(() => {
      handleTimer(timer.weekDays, timer.time, timer.electricGroupName, timer.mode);
    });
  });
}
