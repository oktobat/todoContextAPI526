import React, { createContext, useContext, useState, useRef } from 'react';

const TodoStateContext = createContext()
const TodoDispatchContext = createContext()

const TodoProvider = () => {
  const id = useRef(1)
  const [todos, setTodos] = useState([])
  const onInsert = (value)=>{
    const todo = {id:id.current, text:value, checked:false}
    id.current = id.current + 1;
    setTodos(todos.concat(todo))
  }
  const onToggle = (idno)=>{
    setTodos(todos.map(item=> item.id==idno ? {...item, checked:!item.checked} : item ))
  }
  const onRemove = (idno)=>{
    setTodos(todos.filter( item => item.id !== idno ))
  }
  const onFinishRemove = ()=>{
    setTodos(todos.filter(item=>!item.checked))
  }
  const allRemove = ()=>{
    setTodos([])
  }

  return (
    <div>
      
    </div>
  );
};

export default todoContext;