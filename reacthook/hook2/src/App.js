import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';

const Todo = ({todo, index, completeTodo, removeTodo }) => {
  return(
    <>
    <div>
      className="todo" {/*Todo함수의 인자를 class에서 사용가능*/}
      style={{ textDecoration: todo.isCompleted ? 'line-through' : ''}}
      {todo.text}
    </div>

    <div>
      <button onClick={()=> completeTodo(index)}>complete</button>
      <button onClick={()=> removeTodo(index)}>delete</button>
    </div>
    </>
  )
}

const TodoForm = ({ addTodo }) => { //UI구현을 위한 TodoForm , addTodo
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return
    addTodo(value) //value있으면 value(string)을 받아온다
    setValue('') //문자열 입력후 엔터치고, 엔터후 문자열을 공란으로 바꾸고 상태관리
  }

  return(
    <form onSubmit = {handleSubmit}>
      <input
        type = "text"
        className = "input"
        value = {value}
        onChange = {e => setValue(e.target.value)}
      />
    </form>
  )
}

function App() {
  const [todo, setTodo] = useState([])

  const addTodo = text => { 
    const newTodos = [...todo, { text }]
    setTodo(newTodos) //새할일 추가후 newTodo 변수를 상태변수로 관리
  }

  const completeTodo = index => {
    const newTodos = [...todo] //neTodo에 todo 문자열 저장
    newTodos[index].isCompleted = true //해당 인덱스 "문자열"에 대해 true로 반환, 문자열에 대한 boolean이므로 위에서 todo로 접근해도 boolean 인식가능.
    setTodo(newTodos) //hook을 통한 상태변수관리
  }

  const removeTodo = index => {
    const newTodos = [...todo]
    newTodos.splice(index, 1) //해당 인덱스에 해당하는 문자열을 삭제
    setTodo(newTodos) //해당 문자열을 상태관리
  } 

  return (
    <div className="app">
      <div className="todo-list">
        {
          todo.map( (item, index)=>(
            <Todo
              key = {item}
              index = {index}
              todo = {todo}
              completeTodo = {completeTodo}
              removeTodo = {removeTodo}
            />
          ))
        }
          <TodoForm addTodo = {addTodo}/>
      </div>
    </div>
  );
}

export default App;
