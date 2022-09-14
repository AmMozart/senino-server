type Timer = () => void;

class Clock {
  private timers: Timer[] = [];

  constructor(msInterval: number) {
    setInterval(() => {
      this.timers.forEach(timer => timer());
    }, msInterval);
  }

  public setTimer(timer: Timer) {
    this.timers.push(timer);
  }

  public clearAllTimer() {
    this.timers = [];
  }
}

export default Clock;
