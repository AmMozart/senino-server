import { readFileSync } from 'fs';
import { log, TypeLogger } from '../logger/logger';

export function readLogFile(fileName = '/logfile'): string[] {
  let read;
  let logs: string[] = [];

  try {
    read = readFileSync(fileName, 'utf-8');
  }
  catch {
    queueMicrotask(() => {
      log(TypeLogger.Warn, `File '${fileName}' don't read from disk.`);
    });
  }
  
  logs = read && read.split('\n') || [];
  
  return logs;
}
