import { useState } from "react";
import useTodo from "../TodoContext/Todo";

function Task({ todo }) {
  const [iseditable, setiseditable] = useState(false);
  const [todmsg, settodmsg] = useState(todo.todo);
  const { updated, deleted, toggled } = useTodo();

  const remove = () => {
    deleted(todo.id);
  };

  const update = () => {
    updated(todo.id, { ...todo, todo: todmsg });
    setiseditable(false);
  };

  return (
    <>
      <div className="w-full max-w-2xl mx-auto my-3 px-3 py-3 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center border-2
       border-orange-400 rounded-lg bg-white shadow-sm transition-all duration-200 hover:shadow-md hover:border-orange-500">
        
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggled(todo.id)}
          className="w-5 h-5 shrink-0 cursor-pointer accent-orange-500"
        />

        <input
          type="text"
          readOnly={!iseditable}
          value={todmsg}
          onChange={(e) => settodmsg(e.target.value)}
          className={`w-full sm:flex-1 px-3 py-2 border border-gray-300 rounded-md outline-none transition-all duration-200 
            ${iseditable ? "bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200" : "bg-gray-100"} 
            ${todo.completed ? "line-through text-gray-400" : "text-gray-800"}`}
        />

        <button
          onClick={() => {
            if (iseditable) {
              update();
            } else {
              setiseditable((prev) => !prev);
            }
          }}
          className="w-full sm:w-auto px-4 py-2 rounded-md bg-blue-500 text-white font-medium shadow-sm transition-all duration-200
           hover:bg-blue-600 hover:shadow-md active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-300 cursor-pointer"
        >
          {iseditable ? "Save" : "Edit"}
        </button>

        <button
          onClick={remove}
          className="w-full sm:w-auto p-2 rounded-md border-2 border-red-400 bg-red-50 transition-all duration-200 hover:bg-red-500
           hover:border-red-500 active:scale-95 focus:outline-none focus:ring-2 focus:ring-red-300 cursor-pointer flex justify-center items-center"
        >
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/user-interface/trash-icon.png"
            alt="Delete"
            className="w-5 h-5 transition-transform duration-200 hover:scale-110"
          />
        </button>
      </div>
    </>
  );
}

export default Task;