import { SEND_MESSAGE, Action } from './';
import { IMessage } from './../../Message';

export interface IState {
  messages: Array<IMessage>;
}

export const initialState: IState = {
  messages: [
    { id: 1, message: 'Hi, friend!', date: Date.now(), isIncoming: true },
    { id: 2, message: 'How\'s it going?)))', date: Date.now(), isIncoming: true },
  ]
};

export const reducer = (
  state: IState,
  { type, payload }: Action
): IState => {
  switch (type) {
    case SEND_MESSAGE: {
      const timestamp = Date.now();

      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: timestamp,
            message: payload,
            date: timestamp,
            isIncoming: false
          }
        ]
      };
    }

    default: return state;
  }
};