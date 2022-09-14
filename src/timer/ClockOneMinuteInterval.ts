import Clock from './Clock';

const ONE_MINUTE = 60_000;

class ClockOneMinuteInterval extends Clock {
  constructor() {
    super(ONE_MINUTE);
  }
}

export default new ClockOneMinuteInterval();
