import { rmSync, writeFileSync, } from 'fs';

import { readFromFlash } from './readFromFlash';
import { Timer } from '../timer/Timer';

describe('readFromFlash module:', () => {
  // eslint-disable-next-line quotes
  const stubTimerJSON = `[{"id":0,"electricGroupName":"Boiler","mode":"ON","time":{"hour":5,"minute":19},"weekDays":["Чт"]}]`;
  const result: Timer[] = JSON.parse(stubTimerJSON);

  it(`read JSON data: ${stubTimerJSON}) should be return: ${JSON.stringify(result)}`, () => {
    const fileName = 'testTimerFile';

    try {
      writeFileSync(fileName, stubTimerJSON);
    }
    catch(e: any) {
      console.log(e.message);
    }

    expect(readFromFlash(fileName)).toEqual(result);
    rmSync(fileName);
  });

  it('read no valid JSON data should be return: []', () => {
    const fileName = 'testTimerFile';
    const data = 'no valid JSON data';

    try {
      writeFileSync(fileName, data);
    }
    catch(e: any) {
      console.log(e.message);
    }

    expect(readFromFlash(fileName)).toEqual([]);
    rmSync(fileName);
  });

  it('read no exist file should be return: []', () => {
    const fileName = 'noExistFile';

    expect(readFromFlash(fileName)).toEqual([]);
  });

  it('readFromFlash() should be return Array', () => {
    expect(readFromFlash()).toBeDefined();
  });

});
