import React from 'react';
import { render, RenderResult, screen } from '@testing-library/react';

import MessageList from './MessageList';
import { MessangerContext } from './../Messenger';
import { IMessage } from './../Message';

const getMessage = (message: string, isIncoming: boolean): IMessage => ({
  id: Date.now(),
  message,
  isIncoming,
  date: Date.now()
});

const renderMessageListWithContext = (messages: Array<IMessage>): RenderResult => {
  return render(
    <MessangerContext.Provider
      value={{
        dispatch: () => { },
        messengerState: {
          messages
        }
      }}
    >
      <MessageList />
    </MessangerContext.Provider>
  );
};

describe('MessageList', () => {
  it('render message list without any messages', () => {
    renderMessageListWithContext([]);

    expect(screen.queryByRole('listitem')).toBeNull();
  });

  it('render message list with messages', () => {
    const message = 'Hi there!';

    renderMessageListWithContext([
      getMessage(message, true)
    ]);

    expect(screen.getByRole('listitem')).toBeInTheDocument();
  });
});