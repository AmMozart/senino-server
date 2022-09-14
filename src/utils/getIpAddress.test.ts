import { getIpAddress } from './getIpAddress';

describe('getIpAddress module:', () => {
  
  it('should be return current ip', () => {
    expect(getIpAddress().includes('192.168.')).toBe(true);
  });
});
