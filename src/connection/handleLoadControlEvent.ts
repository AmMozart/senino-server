import { changeElectricGroupState } from '../electricGroup/electricGroupSlice';
import { ProtocolDMX } from '../transceiver/ProtocolDMX';
import Transceiver from '../transceiver/Transceiver';
import { loadDMX, LoadDMX } from '../config/LoadDMX';
import { store } from '../store/store';

const senderDMX = new Transceiver(new ProtocolDMX());

export const handleLoadControlEvent = (payload: unknown): void => {
  if(typeof payload === 'object' && payload !== null) {
    const electricGroupState: LoadDMX = payload as LoadDMX;
    const entries: [string, number][] = Object.entries(electricGroupState);

    const channel = loadDMX[entries[0][0]];
    const level = entries[0][1];
  
    senderDMX.send( {channel, level} );

    store.dispatch(changeElectricGroupState(electricGroupState));
  }
};
