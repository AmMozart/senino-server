import { EventSerialPort } from './EventSerialPort';

type Callback = (data: string) => void;

interface Subscriber {
  [key: string]: Callback[]
}

class SerialPortPublisher {
  private static readonly subscriber: Subscriber = {};

  public static subscribe(event: EventSerialPort, callback: Callback): void {
    if (event in SerialPortPublisher.subscriber) {
      SerialPortPublisher.subscriber[event] = Array.from(new Set(SerialPortPublisher.subscriber[event]));
    }
  }

  public static publish(event: EventSerialPort, data: string): void {
    SerialPortPublisher.subscriber[event]?.forEach(callback => {
      callback(data);
    });
  }
}

export default SerialPortPublisher;
