import {  writeFileSync } from 'fs';

import { TimerData } from '../timer/TimerData';

export function saveOnFlash(timers: TimerData[], fileName = '/timers'): void {
  try {
    writeFileSync(fileName, JSON.stringify(timers));
  }
  catch {
    console.error(`File '${fileName}' don't write on disk.`);
  }
}
