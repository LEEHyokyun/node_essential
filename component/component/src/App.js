import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const Component = (props) => <div className={props.name}>{props.children}</div>

function App() {
  return (
    <Component name="comment"> {/*comment를 관리하는 component*/}
      <Component Name = "UserInfo"> {/*comment 작성한 유저정보를 나타내는 component*/}
        <img className="Avatar" //해당 사용자의 이미지를 나타내는 component
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <Component name="UserInfoName"> {/*유저이름을 나타내는 component*/}
          {props.author.name}
        </Component>
      </Component>
      <Component name="Comment-text">
        {props.text}
      </Component>
      <Component name="Comment-date">
        {formatDate(props.date)}
      </Component>
    </Component>
    )
}
export default App;
