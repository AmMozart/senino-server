import { store } from '../store/store';
import ScriptName from '../script/ScriptName';
import { setScripts } from '../script/scriptSlice';

export const handleSetScriptsEvent = (payload: unknown): void => {
  if (Array.isArray(payload)) {
    const scripts: ScriptName[] = payload;

    store.dispatch(setScripts(scripts));
  }
};
