import React from 'react';
import TodoTemplate from '@/TodoTemplate'
import TodoHeader from '@/TodoHeader'
import TodoInsert from '@/TodoInsert'
import TodoList from '@/TodoList'
import TodoFooter from '@/TodoFooter'

const App = () => {
  return (
    <TodoTemplate>
      <TodoHeader />
      <TodoInsert />
      <TodoList />
      <TodoFooter />
    </TodoTemplate>
  );
};

export default App;