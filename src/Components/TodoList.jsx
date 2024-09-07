import React from "react";

const todoList = ({ id, title, task }) => {
  return (
    <div>
      <p>ID:{id}</p>
      <p>Title:{title}</p>
      <p>Status:{task ? "completed" : "InProgress..."}</p>
    </div>
  );
};

export default todoList;
