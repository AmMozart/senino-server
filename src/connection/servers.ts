import startHttps from './https';
import startWss from './wss';

export const httpsServer = startHttps();
export const wssServer = startWss(httpsServer);
