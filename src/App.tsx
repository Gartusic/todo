import React from 'react';
import './App.css';
import { useState } from 'react';
import Todos from './components/Todos';
import Todo from './models/todo';
import Mood from './models/mood';
import Moods from './components/Moods';
import NewTodo from './components/NewTodo';
import TodosContextProvider from './store/todos-context';
function App() {
 
  return (
    <TodosContextProvider> {/* 이게 없다면 Context가 동작하지 않는다 */}
      {/* <Todos items={todos}/>
      <br/>
      <Moods items={moods}/> */}
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
