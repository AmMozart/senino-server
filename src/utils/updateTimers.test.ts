import Clock from '../timer/Clock';
import { TimerData, TimerMode, WeekDay } from '../timer/TimerData';
import { updateTimers } from './updateTimers';

describe('updateTimers module:', () => {
  let clock: Clock;

  const timers: TimerData[] = [{
    id: 42,
    mode: TimerMode.Off,
    weekDays: [WeekDay.Monday],
    electricGroupName: '0-001X',
    time: {
      hour: 10,
      minute: 2
    }
  }];

  beforeEach(() => {
    clock = new Clock(60_000);
  });
  
  it('clock.timers shoud be assign', () => {
    expect(clock.getTimers()).toEqual([]);

    updateTimers(clock, timers);

    expect(clock.getTimers()).not.toEqual([]);
  });
});
