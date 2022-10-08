import { readFileSync } from 'fs';

export function readLogFile(fileName = '/logfile'): string[] {
  let read;
  let logs: string[] = [];

  try {
    read = readFileSync(fileName, 'utf-8');
  }
  catch {
    console.error(`File '${fileName}' don't read from disk.`);
  }
  
  logs = read && read.split('\n') || [];
  
  return logs;
}
