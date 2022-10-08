import { log, TypeLogger } from '../logger/logger';

export const handleClearLogEvent = (): void => {
  log(TypeLogger.Clear, '');
};
