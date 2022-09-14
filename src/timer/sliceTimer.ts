import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store/store';
import { readFromFlash } from '../utils/readFromFlash';
import { Timer } from './Timer';
import { updateTimers } from '../utils/updateTimers';
import { saveOnFlash } from '../utils/saveOnFlash';

const initialState: Timer[] = readFromFlash();

const sliceTimer = createSlice({
  name: 'Timer',
  initialState,
  reducers: {
    setTimers: (state, action: PayloadAction<Timer[]>) => {
      updateTimers(action.payload);
      saveOnFlash(action.payload);
      
      return action.payload;
    }
  }
});

export const timers = (state: RootState) => state.timers;
export const { setTimers } = sliceTimer.actions;

export default sliceTimer.reducer;