import { SendData } from './SendData';

export interface Protocol {
  getPackage: (boardData: SendData) => string;
}
