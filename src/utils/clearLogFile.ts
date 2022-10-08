import {  writeFileSync } from 'fs';

export function clearLogFile(fileName = '/logfile', text: string): void {
  try {
    writeFileSync(fileName, text);
  }
  catch {
    console.error(`File '${fileName}' don't write on disk.`);
  }
}
