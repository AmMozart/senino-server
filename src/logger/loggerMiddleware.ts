import { Middleware } from '@reduxjs/toolkit';
import { log, TypeLogger } from './logger';

const loggerMiddleware: Middleware = () => next => action => {
  if(action.type === 'electricGroup/changeElectricGroupState') {
    log(TypeLogger.Info, action.payload);
  }
  return next(action);
};

export { loggerMiddleware };
