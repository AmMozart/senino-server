import winston from 'winston';
import { store } from '../store/store';
import { clearLogFile } from '../utils/clearLogFile';
import { addLog } from './sliceLogger'; 
import { clearLog } from '../logger/sliceLogger';
import { checkNever } from '../utils/checkNever';

const pathLogFile = '/logfile';

const logger = winston.createLogger({
  transports: [ new winston.transports.File({ filename: pathLogFile }) ]
});

enum TypeLogger {
  Info = 'Info',
  Warn = 'Warn',
  Clear = 'Clear',
}

const log = (type: TypeLogger, text: string) => {
  const date = new Date(); 
  const resultString = date.toString() + text;

  switch(type) {
  case TypeLogger.Info: {
    logger.info(resultString);
    store.dispatch(addLog(resultString));
    break;
  }
  case TypeLogger.Warn: {
    logger.warn(resultString);
    store.dispatch(addLog(resultString));
    break;
  }
  case TypeLogger.Clear: {
    clearLogFile(pathLogFile, text);
    store.dispatch(clearLog());
    break;
  }
  default: {
    checkNever(type);
  }
  }
};

export { log, TypeLogger };
