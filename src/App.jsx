import React, {useState, useRef} from 'react';
import TodoTemplate from '@/TodoTemplate'
import TodoHeader from '@/TodoHeader'
import TodoInsert from '@/TodoInsert'
import TodoList from '@/TodoList'
import TodoFooter from '@/TodoFooter'

const App = () => {
  return (
    <TodoTemplate>
      <TodoHeader todos={todos} />
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
      <TodoFooter onFinishRemove={onFinishRemove} allRemove={allRemove} />
    </TodoTemplate>
  );
};

export default App;