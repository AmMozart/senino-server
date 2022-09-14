import SerialPortPublisher from '../uart/SerialPortPublisher';
import { EventSerialPort } from '../uart/EventSerialPort';
import { uart } from '../uart/uart';
import { SendData } from './SendData';
import { Protocol } from './Protocol';

class Transceiver {
  public constructor(private protocol: Protocol) {
    SerialPortPublisher.subscribe(EventSerialPort.Read, this.receive);
  }

  public send(data: SendData) {
    uart.write(this.protocol.getPackage(data));
    console.log(`send uart data: ${this.protocol.getPackage(data)}`);
  }

  public receive(data: string) {
    console.log(`receive data: ${data}`);
  }
}

export default Transceiver;
