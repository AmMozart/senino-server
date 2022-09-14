import { SendData } from './SendData';
import { Protocol } from './Protocol';

export class ProtocolKNX implements Protocol {
  public getPackage({ channel, level }: SendData) {
    const flagKNX = 250;

    return `${flagKNX}:${channel}:${level}`;
  }
}
