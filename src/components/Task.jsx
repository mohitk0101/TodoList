import { useState } from "react"
import  useTodo  from "../TodoContext/Todo"

function Task({todo}){
    const[iseditable, setiseditable] = useState(false)
    const[todomsg,settodomsg] =useState(todo.todo)
    const{updated,deleted,toggled}=useTodo()
    const remove = ()=>{
        deleted(todo.id)
    }
    const update = ()=>{
        updated(todo.id, { ...todo, todo: todomsg })
        setiseditable(false)
    }
    return (
        <>
        <div>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggled(todo.id)}
            />

            <input type="text"
            readOnly={!iseditable}
            value={todomsg}
            onChange={(e)=>settodomsg(e.target.value)}
             />

            <button
             onClick={()=>{
                if(iseditable){
                    update()
                }
                else{
                    setiseditable((prev) => !prev)
                }
             }}
             >
                {iseditable ? "Save" : "Edit"}
             
            </button>

            <button onClick={remove} className="ml-2">
              r
            </button>
        </div>
        </>
    )
}
export default Task