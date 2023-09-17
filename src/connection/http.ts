import express from 'express';
import http from 'http';
import { join } from 'path';

import { getIpAddress } from '../utils/getIpAddress';

const PORT = 80;

const app = express();

const startHttp = (): http.Server => {
  app.use(express.static(join(__dirname + '../../../../client/build')));

  const server = http.createServer(app);

  server.listen(PORT, () => {
    console.log(`HTTP server started on url: http://${getIpAddress()}:${PORT}`);
  });
  
  return server;
};

export default startHttp;
