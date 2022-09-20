import { ProtocolKNX } from './ProtocolKNX';

describe('ProtocolKNX module:', () => {
  const knx = new ProtocolKNX();
  
  it('should be return a string', () => {  
    expect(typeof knx.getPackage({channel: 10, level: 11})).toBe('string');
  });
  
  it('should be include knx flag: 250', () => {  
    expect(knx.getPackage({channel: 10, level: 11})).toMatch(/250/);
  });
  
  it('should be return string: 250:23:255', () => {  
    expect(knx.getPackage({channel: 23, level: 255})).toBe('250:23:255');
  });
});
