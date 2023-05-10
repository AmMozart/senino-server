import { changeElectricGroupState } from '../electricGroup/electricGroupSlice';
import { LoadDMX } from '../config/LoadDMX';
import { store } from '../store/store';
import { dmxBus } from '../transceiver/DmxBus';

export const handleLoadControlEvent = (payload: unknown): void => {
  if(typeof payload === 'object' && payload !== null) {
    const electricGroupState: LoadDMX = payload as LoadDMX;
    const entries: [string, number][] = Object.entries(electricGroupState);

    const [groupName, level] = entries[0];
  
    dmxBus.send(groupName, level);
    store.dispatch(changeElectricGroupState(electricGroupState));

    if(groupName === 'Vorota') {
      setTimeout(() => {
        dmxBus.off(groupName);
        store.dispatch(changeElectricGroupState({'Vorota':  0}));
      }, 200);
    }
  }
};
