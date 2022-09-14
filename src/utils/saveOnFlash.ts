import {  writeFileSync } from 'fs';

import { Timer } from '../timer/Timer';

export function saveOnFlash(timers: Timer[], fileName = 'timers'): void {
  try {
    writeFileSync(fileName, JSON.stringify(timers));
  }
  catch {
    console.error(`File '${fileName}' don't write on disk.`);
  }
}
