import { readFileSync } from 'fs';

import { Timer } from '../timer/Timer';

export function readFromFlash(fileName = '/timers'): Timer[] {
  let read;
  let timers: Timer[] = [];

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
