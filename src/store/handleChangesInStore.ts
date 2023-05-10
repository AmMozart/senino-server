import { wssServer } from '../connection/servers';
import { handlePresenceEffect } from '../script/handlePresenceEffect';
import { store } from './store';

const sendStateToClients = () => {
  const state = store.getState();
  const data = JSON.stringify(state);
  
  wssServer.getWss().clients.forEach((client) => {client.send(data);});
};

export const handleChangesInStore = () => {
  sendStateToClients();
  handlePresenceEffect();
};
