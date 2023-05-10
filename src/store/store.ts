import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';

import electricGroupReducer from '../electricGroup/electricGroupSlice';
import timerReducer from '../timer/sliceTimer';
import { loggerMiddleware } from '../logger/loggerMiddleware';
import loggerReducer from '../logger/sliceLogger';
import scriptReducer from '../script/scriptSlice';
import { handleChangesInStore } from './handleChangesInStore';

export const store = configureStore(
  {
    reducer: {
      electricGroup: electricGroupReducer,
      timers: timerReducer,
      logs: loggerReducer,
      scripts: scriptReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(loggerMiddleware),
  });

store.subscribe(handleChangesInStore);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
