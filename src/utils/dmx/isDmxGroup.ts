import { loadDMX } from '../../config/LoadDMX';

type IsDmxGroup = (group: string) => boolean;

const isDmxGroup: IsDmxGroup = (group) => Object.keys(loadDMX).includes(group);

export { isDmxGroup };
