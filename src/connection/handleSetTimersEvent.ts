import { setTimers } from '../timer/sliceTimer';
import { TimerData } from '../timer/TimerData';
import { store } from '../store/store';

export const handleSetTimersEvent = (payload: unknown): void => {
  if (Array.isArray(payload)) {
    const timers: TimerData[] = payload;

    store.dispatch(setTimers(timers));
  }
};
