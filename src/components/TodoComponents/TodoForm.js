// (0) `<TodoForm>` will hold your input field
// (0[1]) Your input field should take in user input
// (1[2]) and allow a user to press`Enter` or click on the`Submit Button`
// (1[3]) to add a todo to your list.
// 1) <TodoForm>` will hold your Add Todo button
// 1[1]) and`Clear Completed` button

import React from "react";

const TodoForm = props => {
  return (
    <div>
      <h3>{props.text}</h3>
      <input
        type="text"
        placeholder="Doing something?"
        onChange={props.handleChanges}
      />
      <button onClick={props.formAdd}>Add Todo</button>
      <button onClick={props.formClear}>Clear Completed</button>
    </div>
  );
};
// onChange = { this.handleInputChange }
// probably use an actual form so that the enter thing works automatically?
// use onSubmit

export default TodoForm;

// handleInputChange = event => {this.Setstate({event.target.value});};
