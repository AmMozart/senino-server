import { handleTimer } from '../timer/handleTimer';
import { Timer } from '../timer/Timer';
import Clock from '../timer/Clock';

export function updateTimers(clock: Clock, timers: Timer[]) {
  clock.clearAllTimer();

  timers.forEach(timer => {
    clock.setTimer(() => {
      handleTimer(timer.weekDays, timer.time, timer.electricGroupName, timer.mode);
    });
  });
}
