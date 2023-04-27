import { readFileSync } from 'fs';

import { log, TypeLogger } from '../logger/logger';

export function readFromFlash(fileName: string): [] {
  let read;
  let array: [] = [];

  try {
    read = readFileSync(fileName, 'utf-8');
  }
  catch {
    queueMicrotask(() => {
      log(TypeLogger.Warn, `File '${fileName}' don't read from disk.`);
    });
  }
  
  try {
    array = JSON.parse(String(read));
  }
  catch {
    queueMicrotask(() => {
      log(TypeLogger.Warn, `No valid json readed data from file '${fileName}'`);
    });
  }
  
  return array;
}
