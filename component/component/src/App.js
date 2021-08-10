import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Comment"> {/*comment를 관리하는 component*/}
      <div className="UserInfo"> {/*comment 작성한 유저정보를 나타내는 component*/}
        <img className="Avatar" //해당 사용자의 이미지를 나타내는 component
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name"> {/*유저이름을 나타내는 component*/}
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
    )
}
export default App;
