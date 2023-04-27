import Clock from '../timer/Clock';
import { TimerData, TimerMode, WeekDay } from '../timer/TimerData';
import { updateTimers } from './updateTimers';

describe.skip('updateTimers module:', () => {
  let clock: Clock;

  let timers: TimerData[];

  beforeEach(() => {
    clock = new Clock(60_000);

    timers = [{
      id: 42,
      mode: TimerMode.Off,
      weekDays: [WeekDay.Monday],
      electricGroupName: '0-001X',
      time: {
        hour: 10,
        minute: 2
      }
    }];
  });
  
  it('clock.timers shoud be assign', () => {
    expect(clock.getTimers()).toEqual([]);

    updateTimers(clock, timers);

    expect(clock.getTimers()).not.toEqual([]);
  });
});
