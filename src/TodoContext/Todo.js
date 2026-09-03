import { createContext,useContext } from "react";

export const todoContext = createContext(
    {
        todos:[],
        addtodo:(todo)=>{},
        updated:(id,todo)=>{},
        deleted:(id)=>{},
        toggled:(id)=>{},
    }
)

export const TodoProvider = todoContext.Provider

export default function useTodo(){
    return useContext(todoContext)
}