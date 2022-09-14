import {  writeFileSync } from 'fs';

import { Timer } from '../timer/Timer';

export function saveOnFlash(timers: Timer[]): void {
  try {
    writeFileSync('timers', JSON.stringify(timers));
  }
  catch {
    console.error('File \'Timers\' don\'t write on disk.');
  }
}
