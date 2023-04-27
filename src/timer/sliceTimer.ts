import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store/store';
import { readFromFlash } from '../utils/readFromFlash';
import { TimerData } from './TimerData';
import { updateTimers } from '../utils/updateTimers';
import { saveOnFlash } from '../utils/saveOnFlash';
import ClockOneMinuteInterval from './ClockOneMinuteInterval';
import { TIMERS_FILE_NAME } from '../config/stateFileName';

const initialState: TimerData[] = readFromFlash(TIMERS_FILE_NAME);

const sliceTimer = createSlice({
  name: 'Timer',
  initialState,
  reducers: {
    setTimers: (state, action: PayloadAction<TimerData[]>) => {
      updateTimers(ClockOneMinuteInterval, action.payload);
      saveOnFlash(action.payload, TIMERS_FILE_NAME);
      
      return action.payload;
    }
  }
});

updateTimers(ClockOneMinuteInterval, initialState);

export const timers = (state: RootState) => state.timers;
export const { setTimers } = sliceTimer.actions;

export default sliceTimer.reducer;
