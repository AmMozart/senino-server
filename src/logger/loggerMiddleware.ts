import { Middleware } from '@reduxjs/toolkit';
import { log, TypeLogger } from './logger';

const loggerMiddleware: Middleware = () => next => action => {
  const result = next(action);

  if(action.type === 'electricGroup/changeElectricGroupState') {
    log(TypeLogger.Info, JSON.stringify(action.payload));
  }
  
  return result;
};

export { loggerMiddleware };
