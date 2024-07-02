import React from 'react';
import styled from 'styled-components'
import TodoListItem from '@/TodoListItem'
import {useTodoState} from '@/context/todoContext'

const TodoListBlock = styled.ul`
  min-height:320px;
  max-height:513px;
  overflow-y:auto;
`

const TodoList = () => {
  const todos = useTodoState()
  return (
    <TodoListBlock>
      { todos.map((todo, index)=><TodoListItem key={index} todo={todo} />)
      }
    </TodoListBlock>
  );
};

export default TodoList;