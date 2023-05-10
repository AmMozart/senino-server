import { TIME_LOOP_PRESENCE_EFFECT_MS, presenceEffectGroups } from '../config/presenceEffect';
import { store } from '../store/store';
import { dmxBus } from '../transceiver/DmxBus';
import ScriptName from './ScriptName';

const handlePresenceEffect = () => {
  let prevIsOn = false;

  return () => {
    const isOn = store.getState().scripts.includes(ScriptName.PresenceEffect);

    if(isOn === prevIsOn) return;
    prevIsOn = isOn;

    if(isOn) {
      enablePresenceEffect();
    } else {
      disablePresenceEffect();
    }
  };
};

let timerID: NodeJS.Timer;

function enablePresenceEffect() {
  const firstGroup = presenceEffectGroups[0]?.groupName;
  firstGroup && dmxBus.on(firstGroup);

  timerID = setInterval(() => {
    presenceEffectGroups.forEach(item => {
      const random = Math.round(Math.random() * 100);
      const sum = item.percentTime + random;

      if(sum > 100) {
        dmxBus.on(item.groupName);
      } else {
        dmxBus.off(item.groupName);
      }
    });
  }
  , TIME_LOOP_PRESENCE_EFFECT_MS);
}

function disablePresenceEffect() {
  if(timerID) {
    clearInterval(timerID);
  }

  presenceEffectGroups.forEach((item) => {
    dmxBus.off(item.groupName);
  });
}

const fn = handlePresenceEffect();

export {fn as handlePresenceEffect };
