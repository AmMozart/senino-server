import expressWs from 'express-ws';
import rtspRelay from 'rtsp-relay';
import https from 'https';

import { handleMessageFromWss } from './handleMessageFromWss';
import { app } from './https';

const startWss = (server: https.Server): expressWs.Instance => {
  const wsServer = expressWs(app, server);
  const appWs = wsServer.app;
  const { proxy } = rtspRelay(app);

  appWs.ws('/', ws => {
    ws.on('message', (message) => {
      handleMessageFromWss(ws, message);
    });

    ws.on('error', e => ws.send(e));
  });

  appWs.ws('/api/stream', proxy({ 
    url: 'rtsp://192.168.1.211/user=admin_password=Google_360_channel=1_stream=0.sdp',
    transport: 'tcp'
  }));

  return wsServer;
};

export default startWss;
