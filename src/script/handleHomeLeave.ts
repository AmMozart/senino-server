import { store } from '../store/store';
import { script } from './Script';
import ScriptName from './ScriptName';

const handleHomeLeave = () => {
  let prevIsOn = true;

  return () => {
    const state = store.getState();
    const isOn = state.scripts.includes(ScriptName.HomeLeave);

    if(isOn === prevIsOn) return;
    prevIsOn = isOn;

    if(isOn) {
      script.lightAllHomeOff();
    }
  };
};

const fn = handleHomeLeave();

export { fn as handleHomeLeave };
