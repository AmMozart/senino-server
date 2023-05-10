import { store } from '../store/store';
import { dmxBus } from '../transceiver/DmxBus';
import ScriptName from './ScriptName';
import { setScripts } from './scriptSlice';

const handleHomeWent = () => {
  let prevIsOn = true;

  return () => {
    const state = store.getState();
    const isOn = state.scripts.includes(ScriptName.HomeWent);

    if(isOn === prevIsOn) return;
    prevIsOn = isOn;

    if(isOn) {
      dmxBus.on('1-01L');

      const newScripts = state.scripts.filter(script => script !== ScriptName.PresenceEffect);
      store.dispatch(setScripts(newScripts));
    }
  };
};

const fn = handleHomeWent();

export { fn as handleHomeWent };
