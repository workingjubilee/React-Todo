// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

// (0))`<TodoList />` receives an array of todo items
// (1) and iterates over the list
// (2[1]) generating a new `<Todo />` for each element in the array.
// (3) Once a todo is submitted
// (3[0]) athe Todo List should re-render with the added todo.

import React from "react";

// todoArray.map(props => {return ,

const TodoList = props => {
  return props.todoArray.map(props => {
    {
      <Todo task={props.task} id={props.id} completed={props.completed} />;
    }
  });
};

export default TodoList;
