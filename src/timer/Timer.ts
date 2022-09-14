export enum TimerMode {
  On = 'ON',
  Off = 'OFF',
}

export interface Time {
  hour: number;
  minute: number;
}

export enum WeekDay {
  Monday = 'Пн',
  Tuesday = 'Вт',
  Wednesday = 'Ср',
  Thursday = 'Чт',
  Friday = 'Пт',
  Saturday = 'Сб',
  Sunday = 'Вс',
}

export interface Timer {
  id: number;
  electricGroupName: string;
  mode: TimerMode;
  time: Time;
  weekDays: WeekDay[];
}
