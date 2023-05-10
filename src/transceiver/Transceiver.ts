import SerialPortPublisher from '../uart/SerialPortPublisher';
import { EventSerialPort } from '../uart/EventSerialPort';
import { uart } from '../uart/uart';
import { SendData } from './SendData';
import { Protocol } from './Protocol';

class Transceiver {
  public constructor(private protocol: Protocol) {
    SerialPortPublisher.subscribe(EventSerialPort.Read, this.receiveFromUART);
  }

  public sendToUART(data: SendData) {
    console.log('Send: ', data);
    uart.write(this.protocol.getPackage(data));
  }

  public receiveFromUART(data: string) {
    // TODO
  }
}

export default Transceiver;
