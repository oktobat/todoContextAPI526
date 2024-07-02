import React from 'react';
import styled from 'styled-components'
import {useTodoState} from '@/context/todoContext'

const TodoHeaderBlock = styled.div`
  h1 {
    height : 4rem;
    background : #22b8cf;
    color : #fff;
    font-size : 1.5rem;
    display : flex;
    justify-content : center;
    align-items : center; 
  }
`

const TodoHeader = () => {
  const todos = useTodoState()
  return (
    <TodoHeaderBlock>
      <h1>일정관리앱 ({ todos.filter(item=>item.checked).length }건 처리/총 {todos.length}건)</h1>
    </TodoHeaderBlock>
  );
};

export default TodoHeader;