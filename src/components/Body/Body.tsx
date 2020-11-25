import React, { useContext, useEffect, useRef } from 'react';

import MessageList from './../MessageList';
import { MessangerContext } from './../Messenger';

import './Body.css';

function Body() {
  const bodyElementRef = useRef<HTMLDivElement>(null);
  const {
    messengerState: { messages }
  } = useContext(MessangerContext);

  useEffect(() => {
    if (bodyElementRef.current) {
      const bodyElement = bodyElementRef.current;
      bodyElement.scrollTop = bodyElement.scrollHeight;
    }
  }, [messages]);

  return (
    <div
      className="body"
      ref={bodyElementRef}
    >
      <MessageList />
    </div>
  );
}

export default Body;
