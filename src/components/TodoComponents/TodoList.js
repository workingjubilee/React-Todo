// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

// (0))`<TodoList />` receives an array of todo items
// (1) and iterates over the list
// (2[1]) generating a new `<Todo />` for each element in the array.
// (3) Once a todo is submitted
// (3[0]) athe Todo List should re-render with the added todo.

import React from "react";
import Todo from "./Todo";

// todoArray.map(props => {return ,

const TodoList = props => {
  return (
    <div className="todoList">
      {props.listArray.map(props => {
        return (
          <Todo
            task={props.task}
            id={props.id}
            completed={props.completed.toString()}
          />
        );
      })}
    </div>
  );
};

// props.listArray.map(props => {
//   {
//     <Todo task={props.task} id={props.id} completed={props.completed} />;
//   }
// props has
// props.todoArray
// todoArray has [0] [1] etc.
// props.toDoArray[0] is an object

export default TodoList;
