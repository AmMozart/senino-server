import webSocket from 'ws';

import { handleLoadControlEvent } from './handleLoadControlEvent';
import { handleSetTimersEvent } from './handleSetTimersEvent';
import { handleGetStateEvent } from './handleGetStateEvent';
import WssEvent from './WssEvent';
import { handleClearLogEvent } from './handleClearLogEvent';
import { log, TypeLogger } from '../logger/logger';
import { checkNever } from '../utils/checkNever';

interface ReceiveData {
  command: WssEvent;
  payload: unknown;
}

export const handleMessageFromWss = (wss: webSocket.WebSocket, message: webSocket.RawData): void => {
  let receiveData: ReceiveData;

  try {
    receiveData = JSON.parse(String(message));
  }
  catch (error) {
    log(TypeLogger.Warn, `Error receive data from wss. Not is JSON: ${String(message)}`);
    return;
  }

  const event = receiveData.command;
  const payload = receiveData.payload;

  switch (event) {
  case WssEvent.GetState: {
    handleGetStateEvent(wss);
    break;
  }
  case WssEvent.LoadControl: {
    handleLoadControlEvent(payload);
    break;
  }
  case WssEvent.SetTimers: {
    handleSetTimersEvent(payload);
    break;
  }
  case WssEvent.ClearLog: {
    handleClearLogEvent();
    break;
  }
  default: {
    checkNever(event);
  }
  }
};
