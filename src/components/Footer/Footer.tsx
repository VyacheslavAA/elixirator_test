import React, { useContext, useState, FormEvent } from 'react';

import { MessangerContext } from './../Messenger';
import { sendMessage } from './../Messenger/store';

import './Footer.css';

function Footer() {
  const { dispatch } = useContext(MessangerContext);
  const [message, setMessage] = useState<string>('');

  const onClickSendButtonHandler = () => {
    dispatch(sendMessage(message));
    setMessage('');
  };

  const onChangeMessageHandler = (evt: FormEvent<HTMLInputElement>) => setMessage(evt.currentTarget.value);

  const isButtonDisabled = message.trim().length === 0;

  return (
    <div className="footer">
      <input
        type="text"
        onChange={onChangeMessageHandler}
        value={message}
        className="footer__textInput messageField"
        placeholder="Type a message..."
      />

      <button
        className="sendButton"
        onClick={onClickSendButtonHandler}
        disabled={isButtonDisabled}
      >Send</button>
    </div>
  );
}

export default Footer;
