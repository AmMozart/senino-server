import { setTimers } from '../timer/sliceTimer';
import { Timer } from '../timer/Timer';
import { store } from '../store/store';

export const handleSetTimersEvent = (payload: unknown): void => {
  if (Array.isArray(payload)) {
    const timers: Timer[] = payload;

    store.dispatch(setTimers(timers));
  }
};
