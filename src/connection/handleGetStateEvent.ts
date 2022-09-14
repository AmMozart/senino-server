import webSocket from 'ws';

import { store } from '../store/store';

export const handleGetStateEvent = (wss: webSocket.WebSocket): void => {
  const state = store.getState();
  const data = JSON.stringify(state);

  wss.send(data);
};
