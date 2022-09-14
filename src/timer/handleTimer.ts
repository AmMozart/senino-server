import { changeElectricGroupState } from '../electricGroup/electricGroupSlice';
import { ProtocolDMX } from '../transceiver/ProtocolDMX';
import Transceiver from '../transceiver/Transceiver';
import { SendData } from '../transceiver/SendData';
import { loadDMX } from '../config/LoadDMX';
import { store } from '../store/store';
import { getWeekDayNameFromNumber } from '../utils/getWeekDayNameFromNumber';
import { Time, WeekDay } from './Timer';

const sender = new Transceiver(new ProtocolDMX());
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

  const data: SendData = {
    channel: loadDMX[groupName],
    level: power === 'ON' ? 255 : 0,
  };

  if (isWorkDay && isWorkTime) {
    store.dispatch(changeElectricGroupState({[groupName]: data.level}));
    sender.send(data);
  }
};
