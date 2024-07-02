import React, { createContext, useContext, useState } from 'react';

const TodoStateContext = createContext()
const TodoDispatchContext = createContext()

const TodoProvider = ({children}) => {
  const [todos, setTodos] = useState([])
  const onInsert = (value)=>{
    const todo = {id:Date.now(), text:value, checked:false}
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
    <TodoStateContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={{onInsert, onToggle, onRemove, onFinishRemove, allRemove}}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

const useTodoState = () => {
  const context = useContext(TodoStateContext);
  if (!context) {
      throw new Error('오류');
  }
  return context;
};

const useTodoDispatch = () => {
  const context = useContext(TodoDispatchContext);
  if (!context) {
      throw new Error('오류');
  }
  return context;
};

export {TodoProvider, useTodoState, useTodoDispatch };