import startHttp from './http';
import startHttps from './https';
import startWss from './wss';

export const httpServer = startHttp();
export const httpsServer = startHttps();
export const wssServer = startWss(httpsServer);
