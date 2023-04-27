import {  writeFileSync } from 'fs';

import { log, TypeLogger } from '../logger/logger';

export function saveOnFlash(array: any[], fileName: string): void {
  try {
    writeFileSync(fileName, JSON.stringify(array));
  }
  catch {
    log(TypeLogger.Warn, `File '${fileName}' don't write on disk.`);
  }
}
