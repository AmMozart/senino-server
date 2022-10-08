import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';

import electricGroupReducer from '../electricGroup/electricGroupSlice';
import { wssServer } from '../connection/servers';
import timerReducer from '../timer/sliceTimer';
import { loggerMiddleware } from '../logger/loggerMiddleware';

export const store = configureStore(
  {
    reducer: {
      electricGroup: electricGroupReducer,
      timers: timerReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(loggerMiddleware),
  });

store.subscribe(() => {
  const state = store.getState();
  const data = JSON.stringify(state);

  wssServer.getWss().clients.forEach((client) => {client.send(data);});
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
