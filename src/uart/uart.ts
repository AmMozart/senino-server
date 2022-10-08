import { SerialPort } from 'serialport';
import { PORT_NAME, BAUD_RATE } from '../config/serialPortConfig';
import { EventSerialPort } from './EventSerialPort';
import SerialPortPublisher from './SerialPortPublisher';

const TAG = 'UART';
export let uart = uartInit();

function handlePortOpen(): void {
  console.log(`${TAG}: port ${uart.path} open, Data rate: ${uart.baudRate}`);
}

function handlePortClose(): void {
  console.log(`${TAG}: port ${uart.path} closed.`);
  setTimeout(() => uart = uartInit(), 10_000);
}

function handlePortError(error: string): void {
  console.log(`${TAG}: port error: ${error}`);
  setTimeout(() => uart = uartInit(), 10_000);
}

function readPortData(data: string): void {
  SerialPortPublisher.publish(EventSerialPort.Read, data);
}

function uartInit() {
  const resultUart = new SerialPort({ path: PORT_NAME, baudRate: BAUD_RATE });

  resultUart.on('open', handlePortOpen);
  resultUart.on('close', handlePortClose);
  resultUart.on('error', handlePortError);  
  resultUart.on('data', readPortData);

  return resultUart;
}
