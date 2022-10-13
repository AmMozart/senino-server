import { readFileSync } from 'fs';

import { TimerData } from '../timer/TimerData';

export function readFromFlash(fileName = '/timers'): TimerData[] {
  let read;
  let timers: TimerData[] = [];

  try {
    read = readFileSync(fileName, 'utf-8');
  }
  catch {
    console.error(`File '${fileName}' don't read from disk.`);
  }
  
  try {
    timers = JSON.parse(String(read));
  }
  catch {
    console.error(`No valid readed data from file '${fileName}'`);
  }
  
  return timers;
}
