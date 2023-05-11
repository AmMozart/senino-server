import { dmxBus } from '../transceiver/DmxBus';
import { isDmxGroup } from '../utils/dmx/isDmxGroup';

class ElectricGroup {
  public static on(...groupNames: string[] | string[][]): void {
    groupNames = groupNames.flat();

    groupNames.forEach(group => {
      if(isDmxGroup(group)) dmxBus.on(group);
    });
  }

  public static off(...groupNames: string[] | string[][]): void {
    groupNames = groupNames.flat();

    groupNames.forEach(group => {
      if(isDmxGroup(group)) dmxBus.off(group);
    });
  }
}

export {ElectricGroup};
