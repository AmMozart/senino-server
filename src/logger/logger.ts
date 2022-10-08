import Logger from 'logger';
import { store } from '../store/store';
import { clearLogFile } from '../utils/clearLogFile';
import { addLog } from './sliceLogger'; 
import { clearLog } from '../logger/sliceLogger';

const pathLogFile = '/logfile';
const logger = Logger.createLogger(pathLogFile);

enum TypeLogger {
  Info = 'Info',
  Warn = 'Warn',
  Clear = 'Clear',
}

const log = (type: TypeLogger, text: string) => {
  switch(type) {
  case TypeLogger.Info: {
    store.dispatch(addLog(logger.info(text) || ''));
    break;
  }
  case TypeLogger.Warn: {
    store.dispatch(addLog(logger.warn(text) || ''));
    break;
  }
  case TypeLogger.Clear: {
    clearLogFile(pathLogFile, text);
    store.dispatch(clearLog());
    break;
  }
  default: {
    console.log('Error logger type');
  }
  }
};

export { log, TypeLogger };
