import { ProtocolDMX } from './ProtocolDMX';

describe('ProtocolDMX module:', () => {
  const dmx = new ProtocolDMX();
  
  it('should be return a string', () => {  
    expect(typeof dmx.getPackage({channel: 10, level: 11})).toBe('string');
  });
  
  it('should be include DMX flag: 251', () => {  
    expect(dmx.getPackage({channel: 10, level: 11})).toMatch(/251/);
  });
  
  it('should be return string: 251:23:255', () => {  
    expect(dmx.getPackage({channel: 23, level: 255})).toBe('251:23:255');
  });
});
