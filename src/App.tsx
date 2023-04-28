import React from 'react';
import './App.css';
import { useState } from 'react';
import Todos from './components/Todos';
import Todo from './models/todo';
import Mood from './models/mood';
import Moods from './components/Moods';
import NewTodo from './components/NewTodo';
function App() {
  // const todos= [
  //   new Todo('Learn React'), // todo.ts에 정의된 클래스를 통해 배열값을 생성함. Text에 해당하는 값을 argument로 넣고있다.
  //   new Todo('Learn Typescript')
  // ];
  // const moods=[
  //   new Mood(100),
  //   new Mood(1)
  // ]

  //const [todos, setTodos] = useState([]); <- 이렇게 정의하면 useState의 매개변수는 never[]타입이 되는데, 그 뜻은 항상 빈 배열이어야 한다는 의미이기 때문에 적합하지 않다.
  const [todos, setTodos] = useState<Todo[]>([]); // 이렇게 정의하면 useState에서 매개값이 Todo라는 타입이라는 것을 알려주는 제네릭 함수가 된다. (todo.ts에서 정의된 타입 Todo 사용)
  
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => { //useState의 setTodos 함수를 이용하여 todos를 업데이트한다.
      return prevTodos.concat(newTodo);
    });
  };


  const removeTodoHandler = (todoId:string) =>{
    setTodos((prevTodos) =>{
      return prevTodos.filter(todo => todo.id !== todoId); // todo.id에 해당하는 todo만 빼고 남긴다.
      // filter() : 조건에 해당하는 값들만 걸러주는 함수이다. Array에 쓰이는 내장 함수이다. 
    })
  };
  return (
    <div className="App">
      {/* <Todos items={todos}/>
      <br/>
      <Moods items={moods}/> */}
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
    </div>
  );
}

export default App;
