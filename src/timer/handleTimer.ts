import { changeElectricGroupState } from '../electricGroup/electricGroupSlice';
import { store } from '../store/store';
import { dmxBus } from '../transceiver/DmxBus';
import { getWeekDayNameFromNumber } from '../utils/getWeekDayNameFromNumber';
import { Time, WeekDay } from './TimerData';

type Power = 'ON' | 'OFF';

type HandleTimer = (days: WeekDay[], time: Time, groupName: string, power: Power) => void;

export const handleTimer: HandleTimer = (days, time, groupName, power) => {
  const date = new Date();

  const currentTime: Time = {
    hour: date.getHours(),
    minute: date.getMinutes(),
  };

  const isWorkDay = days.includes(getWeekDayNameFromNumber(date.getDay()));
  const isWorkTime = time.hour === currentTime.hour &&
    time.minute === currentTime.minute;

  const level = power === 'ON' ? 255 : 0;

  if (isWorkDay && isWorkTime) {
    store.dispatch(changeElectricGroupState({[groupName]: level}));

    if(power === 'ON') {
      dmxBus.on(groupName);
    } else {
      dmxBus.off(groupName);
    }
  }
};
