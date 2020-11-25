import React from 'react';

import { getFormattedDateFromTimestamp } from './../../helpers';
import { IMessage } from './Message.interfaces';

import './Message.css';

interface MessageProps extends Pick<IMessage, 'message' | 'date' | 'isIncoming'> {
  avatar?: string;
}

function Message({
  message,
  date,
  isIncoming,
  avatar
}: MessageProps) {
  return (
    <li className={`message ${isIncoming ? 'message--incoming' : ''}`}>
      {
        isIncoming && avatar && (
          <div className="messageAvatar message__avatar">
            <img src={avatar} alt="avatar" />
          </div>
        )
      }

      <div className={`messageBody ${isIncoming ? 'messageBody--gray' : ''}`}>
        <span className="messageBody__text">{message}</span>

        <span className="messageBody__date">{getFormattedDateFromTimestamp(date)}</span>
      </div>
    </li>
  );
}

export default Message;
