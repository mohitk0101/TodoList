import { useEffect, useState } from 'react'
import Form from './components/form'
import Task from './components/task'
import { TodoProvider } from "./TodoContext/Todo";

function App(){
  const[todos,settodos]=useState([])
  const addtodo = (todo)=>{
      settodos((todos) => [{id:Date.now(),...todo},...todos])
  }
  const updated = (id,todo)=>{
       settodos((todoes)=>todoes.map(
        (pretodo)=>pretodo.id==id?todo:pretodo)
      )
  }
  const deleted = (id)=>{
    settodos((todos)=>todos.filter((prevtodo)=>prevtodo.id!=id))
  }
  const toggled = (id)=>{
    settodos((todos)=>todos.map(
      (prevtodo)=>prevtodo.id==id?{...prevtodo,completed: !prevtodo.completed}:prevtodo
    ))
  }
  useEffect(()=>{
    let data = JSON.parse(localStorage.getItem("todos"))|| [];
    settodos(data)
},[])
  useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  return (
    <TodoProvider value={{ todos, addtodo, updated, deleted, toggled }}>
    <div className='h-full w-full text-center m-2 '>
      <Form />

    {todos.map((todo) => (
        <div key={todo.id}>
            <Task todo={todo} />
        </div>
    ))}
    </div>
   </TodoProvider>
  )
}
export default   App