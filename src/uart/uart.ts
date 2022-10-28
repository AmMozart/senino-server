import { SerialPort } from 'serialport';
import { PORT_NAME, BAUD_RATE } from '../config/serialPortConfig';
import { EventSerialPort } from './EventSerialPort';
import SerialPortPublisher from './SerialPortPublisher';

const RECONNECT_LOOP = 10_000;
export let uart = uartInit();

function handlePortOpen(): void {
  // TODO
}

function handlePortClose(): void {
  reconnectUart();
}

function handlePortError(): void {
  reconnectUart();
}

function readPortData(data: string): void {
  SerialPortPublisher.publish(EventSerialPort.Read, data);
}

function uartInit(): SerialPort {
  const resultUart = new SerialPort({ path: PORT_NAME, baudRate: BAUD_RATE });

  resultUart.on('open', handlePortOpen);
  resultUart.on('close', handlePortClose);
  resultUart.on('error', handlePortError);  
  resultUart.on('data', readPortData);

  return resultUart;
}

function reconnectUart(): void {
  setTimeout(() => uart = uartInit(), RECONNECT_LOOP);
}
