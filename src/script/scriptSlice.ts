import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import ScriptName from './ScriptName';

import { RootState } from '../store/store';
import { readFromFlash } from '../utils/readFromFlash';
import { saveOnFlash } from '../utils/saveOnFlash';
import { SCRIPTS_FILE_NAME } from '../config/stateFileName';

const initialState: ScriptName[] = readFromFlash(SCRIPTS_FILE_NAME);

const scriptSlice = createSlice({
  name: 'scripts',
  initialState,
  reducers: {
    setScripts: (state, action: PayloadAction<ScriptName[]>) => {
      saveOnFlash(action.payload, SCRIPTS_FILE_NAME);
      return action.payload;
    },
  },
});

export const { setScripts } = scriptSlice.actions;

export const scripts = (state: RootState) => state.scripts;

export default scriptSlice.reducer;
