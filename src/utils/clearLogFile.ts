import {  writeFileSync } from 'fs';
import { log, TypeLogger } from '../logger/logger';

export function clearLogFile(fileName = '/logfile', text: string): void {
  try {
    writeFileSync(fileName, text);
  }
  catch {
    log(TypeLogger.Warn, `File '${fileName}' don't write on disk`);
  }
}
