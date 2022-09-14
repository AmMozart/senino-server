import { readFileSync } from 'fs';

import { Timer } from '../timer/Timer';

export function readFromFlash(): Timer[] {
  let read;
  let timers: Timer[] = [];

  try {
    read = readFileSync('timers');
  }
  catch {
    console.error('File \'timers\' don\'t read from disk.');
  }
  
  try {
    timers = JSON.parse(String(read));
  }
  catch {
    console.error('No valid readed data from file \'timers\'');
  }
  
  return timers;
}
