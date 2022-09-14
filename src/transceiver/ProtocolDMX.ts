import { SendData } from './SendData';
import { Protocol } from './Protocol';

export class ProtocolDMX implements Protocol {
  public getPackage({ channel, level }: SendData) {
    const flagDMX = 251;

    return `${flagDMX}:${channel}:${level}`;
  }
}
