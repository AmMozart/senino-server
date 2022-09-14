import { SerialPort } from 'serialport';
import { PORT_NAME, BAUD_RATE } from '../config/serialPortConfig';
import { EventSerialPort } from './EventSerialPort';
import SerialPortPublisher from './SerialPortPublisher';

const TAG = 'UART';
export const uart = new SerialPort({ path: PORT_NAME, baudRate: BAUD_RATE });

function handlePortOpen(): void {
  console.log(`${TAG}: port ${uart.path} open, Data rate: ${uart.baudRate}`);
}

function handlePortClose(): void {
  console.log(`${TAG}: port ${uart.path} closed.`);
}

function handlePortError(error: string): void {
  console.log(`${TAG}: port error: ${error}`);
}

function readPortData(data: string): void {
  SerialPortPublisher.publish(EventSerialPort.Read, data);
}

uart.on('open', handlePortOpen);
uart.on('close', handlePortClose);
uart.on('error', handlePortError);
uart.on('data', readPortData);
