import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const Comment = (props) => {
  <div className="comment">{props.children}</div>
} //component화 이후 이 자체로 사용가능

const UserInfo = (props) => {
  <div className="Avatar">{props.children}</div>
}

//Comment와 UserInfo에서, 벌써부터 중복되는 부분이 나타나기 시작했다.
//중복되는 부분을 제거하는 작업이 필요하다.

function App() {
  return (
    <Comment> {/*comment를 관리하는 component*/}
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
    </Comment>
    )
}
export default App;
