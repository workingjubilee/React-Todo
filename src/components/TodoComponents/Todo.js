// 0) - `<Todo />` is a component that
// 1) takes in the`todo` data
// 2) and displays the task to the screen.

import React from "react";
import "./Todo.css";

const Todo = props => {
  return (
    <div>
      <h1 className={props.completed.toString()}>{props.task}</h1>
      <p>{props.id}</p>
      <button onClick={() => props.todoCheck(props.id)}>Done?</button>
    </div>
  );
};
// props.task;
// props.id;
// props.completed: false;

//   {
// task: 'Organize Garage',
//   id: 1528817077286,
//     completed: false
//   },

export default Todo;
