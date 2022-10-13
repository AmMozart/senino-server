import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store/store';
import { readFromFlash } from '../utils/readFromFlash';
import { TimerData } from './TimerData';
import { updateTimers } from '../utils/updateTimers';
import { saveOnFlash } from '../utils/saveOnFlash';
import ClockOneMinuteInterval from './ClockOneMinuteInterval';

const initialState: TimerData[] = readFromFlash();

const sliceTimer = createSlice({
  name: 'Timer',
  initialState,
  reducers: {
    setTimers: (state, action: PayloadAction<TimerData[]>) => {
      updateTimers(ClockOneMinuteInterval, action.payload);
      saveOnFlash(action.payload);
      
      return action.payload;
    }
  }
});

updateTimers(ClockOneMinuteInterval, initialState);

export const timers = (state: RootState) => state.timers;
export const { setTimers } = sliceTimer.actions;

export default sliceTimer.reducer;
