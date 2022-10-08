import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store/store';
import { readLogFile } from '../utils/readLogFile';

const initialState: string[] = readLogFile();

const sliceLogger = createSlice({
  name: 'Logger',
  initialState,
  reducers: {
    addLog: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },

    clearLog: () => {
      return [];
    }
  }
});

export const logs = (state: RootState) => state.logs;
export const { clearLog, addLog } = sliceLogger.actions;

export default sliceLogger.reducer;
