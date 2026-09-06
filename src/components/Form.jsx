import { useState } from "react";
import useTodo from "../TodoContext/Todo";

function Form() {
  const [todomsg, settodomsg] = useState("");
  const { addtodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    addtodo({ todo: todomsg, completed: false });
    settodomsg("");
  };

  return (
    <>
      <form onSubmit={add} className="w-full max-w-2xl mx-auto my-5 px-3 flex flex-col sm:flex-row gap-3">
        <input type="text" value={todomsg} onChange={(e) => settodomsg(e.target.value)} placeholder="Enter your task..." 
        className="w-full flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg outline-none transition-all duration-200
         focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-gray-400" />

        <button type="submit" className="w-full sm:w-auto px-5 py-2 bg-blue-500 text-white font-medium rounded-lg 
        border-2 border-blue-500 transition-all duration-200 hover:bg-blue-700 hover:border-blue-700 hover:shadow-md 
        active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-300 cursor-pointer">
          Add
        </button>
      </form>
    </>
  );
}

export default Form;