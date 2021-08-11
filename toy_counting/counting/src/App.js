import React from 'react';
import {createStore} from 'redux';
import { Provider, connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

function Counter({value, add}){
  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={add}>ADD</button>
    </div>
  )
}

//logic1
function mapStateToProps(state){
  return {
    value : state.count
  }
}

//logic2(ACTION)
function mapDispatchToProps(dispatch){
  return {
    add: () => {
      dispatch({type: 'INCREASE'})
    }
  }

}

//counter 함수 내부의 상태변수인 count를 state를 통해 접근가능
//Reducer logic
//create store를 통해 action을 어떻게 받을 것인가
function counter(state = {count: 0}, action){
  const {count} = state.count //destructring
  switch (action.type) {
    case 'INCREASE' :
      return { count : count + 1}
    default :
      return state
  }
}

//Counter Component와 연결하여 상태관리중인 변수를 connect로 연결
//Store와 연결하는 logic, Action과도 연결됨
const ReduxCounter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)


//Redux Store과 Action을 연결
function App() {
  const store = createStore(counter)
  return (
   <Provider store = {store}>
     <ReduxCounter/>
   </Provider>
  );
}

export default App;
