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
            className=" border-2 border-black m-2"
             />
            <button className="border-2 border-black px-2 bg-blue-500 hover: bg-blue-700 text-white">
                Add
            </button>
        </form>
        </>
    )
}
export default Form;