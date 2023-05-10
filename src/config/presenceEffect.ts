const TIME_LOOP_PRESENCE_EFFECT_MS = 60_00 * 20; // 20 minutes

interface PresenceEffectGroup {
  groupName: string;
  percentTime: number;
}

const presenceEffectGroups: PresenceEffectGroup[] = [
  {groupName: '1-01L', percentTime: 50},
  {groupName: '1-02L', percentTime: 20},
  {groupName: '1-07L', percentTime: 100},
];

export { TIME_LOOP_PRESENCE_EFFECT_MS, presenceEffectGroups };
