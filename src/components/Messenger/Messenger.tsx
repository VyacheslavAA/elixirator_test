import React, { useReducer, createContext, Dispatch } from 'react';

import Header from './../Header';
import Body from './../Body';
import Footer from './../Footer';
import {
  reducer as messengerReducer,
  initialState,
  IState,
  SendMessageAction
} from './store';

import './Messenger.css';

interface IMessangerContext {
  messengerState: IState;
  dispatch: Dispatch<SendMessageAction>
}

export const MessangerContext = createContext<IMessangerContext>({
  messengerState: initialState,
  dispatch: () => { }
});

function Messenger() {
  const [
    messengerState,
    dispatch
  ] = useReducer(messengerReducer, initialState);

  return (
    <div className="messenger">
      <MessangerContext.Provider value={{ messengerState, dispatch }}>
        <Header />

        <Body />

        <Footer />
      </MessangerContext.Provider>
    </div>
  );
}

export default Messenger;
