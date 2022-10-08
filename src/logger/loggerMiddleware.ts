import { Middleware } from '@reduxjs/toolkit';
import { log } from './logger';

const loggerMiddleware: Middleware = 
  store => next => action => {
    if(action.type === 'electricGroup/changeElectricGroupState') {
      log.info(action.payload);
    }
    return next(action);
  };

export { loggerMiddleware };
