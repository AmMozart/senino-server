import os from 'os';

export const getIpAddress = (): string => {
  const networkInterfaces = os.networkInterfaces();
  let ip = '';

  for(const key in networkInterfaces) {
    networkInterfaces[key]?.forEach(obj => {
      if(obj.address.includes('192.168.')) {
        ip = obj.address;
      }
    });
  }

  return ip;
};
