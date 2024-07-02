import React from 'react';
import styled from 'styled-components'
import TodoListItem from '@/TodoListItem'

const TodoListBlock = styled.ul`
  min-height:320px;
  max-height:513px;
  overflow-y:auto;
`

const TodoList = ({todos, onToggle, onRemove}) => {
  return (
    <TodoListBlock>
      {
        todos.map((todo, index)=><TodoListItem key={index} todo={todo} onToggle={onToggle} onRemove={onRemove} />)
      }
    </TodoListBlock>
  );
};

export default TodoList;