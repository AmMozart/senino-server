import {  writeFileSync } from 'fs';

import { TimerData } from '../timer/TimerData';
import { log, TypeLogger } from '../logger/logger';

export function saveOnFlash(timers: TimerData[], fileName = '/timers'): void {
  try {
    writeFileSync(fileName, JSON.stringify(timers));
  }
  catch {
    log(TypeLogger.Warn, `File '${fileName}' don't write on disk.`);
  }
}
