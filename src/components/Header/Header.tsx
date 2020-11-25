import React from 'react';

import avatar from './../../assets/images/avatar.png';

import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="userInfo">
        <div className="userInfo__avatar">
          <img src={avatar} alt="avatar" />
        </div>
        <span className="userInfo__name">Vyacheslav</span>
      </div>
    </div>
  );
}

export default Header;
