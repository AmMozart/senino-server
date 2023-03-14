import { readFileSync } from 'fs';

import { TimerData } from '../timer/TimerData';
import { log, TypeLogger } from '../logger/logger';

export function readFromFlash(fileName = '/timers'): TimerData[] {
  let read;
  let timers: TimerData[] = [];

  try {
    read = readFileSync(fileName, 'utf-8');
  }
  catch {
    queueMicrotask(() => {
      log(TypeLogger.Warn, `File '${fileName}' don't read from disk.`);
    });
  }
  
  try {
    timers = JSON.parse(String(read));
  }
  catch {
    queueMicrotask(() => {
      log(TypeLogger.Warn, `No valid json readed data from file '${fileName}'`);
    });
  }
  
  return timers;
}
