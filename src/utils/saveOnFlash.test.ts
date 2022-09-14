import { readFileSync, rmSync } from 'fs';
import { Timer, TimerMode, WeekDay } from '../timer/Timer';
import { saveOnFlash } from './saveOnFlash';

describe('saveOnFlash module: ', () => {
  let timers: Timer[] = [];
  const testFileName = 'testFileName';
  const defaultFileName = 'timers';

  beforeEach(() => {
    timers = [
      {
        id: 42,
        electricGroupName: '0-01X',
        mode: TimerMode.Off,
        time: {
          hour: 10,
          minute: 42
        },
        weekDays: [WeekDay.Monday]
      }
    ];
  });

  it(`file '${testFileName}' should be created`, () => {
    saveOnFlash(timers, testFileName);

    let readData;
    try {
      readData = readFileSync(testFileName);
    }
    catch(e: any) {
      console.log(e.message);
    }

    expect(String(readData)).not.toBe('');
    rmSync(testFileName);
  });

  it(`file '${defaultFileName}' should be created`, () => {
    saveOnFlash(timers);

    let readData;
    try {
      readData = readFileSync(defaultFileName);
    }
    catch(e: any) {
      console.log(e.message);
    }

    expect(String(readData)).not.toBe('');
    rmSync(defaultFileName);
  });

});
