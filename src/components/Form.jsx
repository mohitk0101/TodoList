import { useEffect, useState } from "react";
import useTodo from "../TodoContext/Todo";

function  Form(){
    const[todomsg,settodomsg] = useState("")
    const{addtodo} = useTodo()
    const add = (e)=>{
        e.preventDefault();
        addtodo({todo: todomsg,completed: false})
        settodomsg("")
    }
    return (
        <>
        <form action="" onSubmit={add}>
            <input type="text"
            value = {todomsg}
            onChange={(e)=>settodomsg(e.target.value)}
            className="border-2 border-red"
             />
            <button className="border-2 border-black">
                Add
            </button>
        </form>
        </>
    )
}
export default Form;