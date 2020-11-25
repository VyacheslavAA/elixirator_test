import React, { useContext, useMemo } from 'react';

import Message from './../Message';
import { MessangerContext } from './../Messenger';

import avatar from './../../assets/images/avatar.png'
import './MessageList.css';

function MessageList() {
  const {
    messengerState: { messages },
  } = useContext(MessangerContext);

  const lastMessageFromInterlocutor = useMemo(() => {
    for (let idx = messages.length - 1; idx >= 0; idx--) {
      if (messages[idx].isIncoming) {
        return messages[idx];
      }
    }
  }, [messages]);

  return (
    <ul className="messageList">
      {
        messages.map(({ id, ...messageProps }) => (
          <Message
            key={id}
            avatar={lastMessageFromInterlocutor?.id === id ? avatar : undefined}
            {...messageProps}
          />
        ))
      }
    </ul>
  );
}

export default MessageList;
