import { ProtocolDMX } from '../transceiver/ProtocolDMX';
import Transceiver from '../transceiver/Transceiver';
import { loadDMX } from '../config/LoadDMX';
import { store } from '../store/store';
import { changeElectricGroupState } from '../electricGroup/electricGroupSlice';

class DmxBus extends Transceiver {
  constructor() {
    super(new ProtocolDMX());
  }

  public send(groupName: string, level: number) {
    const channel = loadDMX[groupName];
    this.sendToUART({channel, level});
    store.dispatch(changeElectricGroupState({[groupName]: level}));
  }

  public on(groupName: string) {
    this.send(groupName, 255);
  }

  public off(groupName: string) {
    this.send(groupName, 0);
  }
}

const dmxBus = new DmxBus();

export { dmxBus };
