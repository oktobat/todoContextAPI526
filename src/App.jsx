import React, {useState, useRef} from 'react';
import TodoTemplate from '@/TodoTemplate'
import TodoHeader from '@/TodoHeader'
import TodoInsert from '@/TodoInsert'
import TodoList from '@/TodoList'
import TodoFooter from '@/TodoFooter'
import {useTodoState, useTodoDispatch} from '@/context/todoContext'

const App = () => {
  const todos = useTodoState()
  return (
    <TodoTemplate>
      <TodoHeader todos={todos} />
      <TodoInsert />
      <TodoList todos={todos} />
      <TodoFooter />
    </TodoTemplate>
  );
};

export default App;