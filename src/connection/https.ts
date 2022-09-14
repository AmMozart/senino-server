import express from 'express';
import https from 'https';
import fs from 'fs';
import { join } from 'path';

import { PORT } from '../config/webServerConfig';
import { getIpAddress } from './utils';

const privateKey = fs.readFileSync(join(__dirname, '../asset/certificates/server.key'), 'utf8');
const certificate = fs.readFileSync(join(__dirname, '../asset/certificates/server.crt'), 'utf8');

export const app = express();

const startHttps = (): https.Server => {
  app.use(express.static(join(__dirname + '../../../../client/build')));

  const server = https.createServer(
    { 
      key: privateKey,
      cert: certificate
    }, app);

  server.listen(PORT, () => {
    console.log(`HTTPS server started on url: https://${getIpAddress()}:${PORT}`);
  });
  
  return server;
};

export default startHttps;
