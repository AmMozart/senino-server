import { handleTimer } from '../timer/handleTimer';
import { TimerData } from '../timer/TimerData';
import Clock from '../timer/Clock';

export function updateTimers(clock: Clock, timers: TimerData[]) {
  clock.clearAllTimer();

  timers.forEach(timer => {
    clock.setTimer(() => {
      handleTimer(timer.weekDays, timer.time, timer.electricGroupName, timer.mode);
    });
  });
}
