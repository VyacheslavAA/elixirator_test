import { SEND_MESSAGE } from './';

export type SendMessageAction = { type: string, payload: string };
export type Action =
  | SendMessageAction;

export const sendMessage = (text: string): SendMessageAction => ({ type: SEND_MESSAGE, payload: text });