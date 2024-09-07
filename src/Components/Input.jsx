import React from "react";
import { useState } from "react";

const Input = ({ todo }) => {
    const[title,setTitle]=useState("")
  const handleClick = (e) => {
    e.preventDefault();

    const newTodo = {
      title: title,
      completed: false,
    };
    todo(newTodo)
    setTitle("")
  };

  return (
    <form onSubmit={handleClick} className="flex items-center space-x-2">
      <input
        type="text"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        placeholder="Enter a task"
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add Task
      </button>
    </form>
  );
};

export default Input;
