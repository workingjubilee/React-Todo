import React from "react";
import Todo from "./components/TodoComponents/Todo";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

//  Your todo list should display a list of todos,
//  (0[1]) an input field
//  (0[2]) a submit button
//  (0[3]) and a clear all button.
//  (1) use the given files for building out these components.
//  (2) <App /> will hold the data needed for this project.
//  (3) <App /> is the container for your Todo Components.
//  (4) All handler functions should live here on<App />.

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state,
  // including any handlers you need to work with your state
  constructor() {
    super();
    this.todoSaved = [];
    // there's might be a .push to this at some point, probably?
    // to get it saved into local browser data instead of React's State?
    // I could put it temporarily in State, but...?
    // wait, would "on an object" be saved? why wouldn't State be saved??? hmm...
    this.state = {
      message: "Go on...",
      text: "",
      stateArray: [
        { task: "fake", id: 1, completed: false },
        { task: "faker", id: 2, completed: true },
        { task: "fakest", id: 3, completed: false }
      ],
      boolean: true
    };
  }

  handleAdd = (event, text) => {
    event.preventDefault();
    console.log("Yo!");
    const newTodo = {
      task: text,
      id: Date.now(),
      completed: false
    };
    this.setState({
      stateArray: [...this.state.stateArray, newTodo]
    });
  };

  handleInputChange = event => {
    this.setState({
      text: event.target.value
    });
  };

  handleClear = (event, todo) => {
    this.setState({
      stateArray: this.state.stateArray.filter(todo => {
        if (todo.completed === false) {
          return todo;
        }
      })
    });
  };

  todoCheck = check => {
    console.log("Check");
    this.setState({
      stateArray: this.state.stateArray.map(todo => {
        if (todo.id === check) {
          return { ...todo, completed: !todo.completed };
          console.log("Bang");
        } else {
          return todo;
          console.log("Skipped");
        }
      })
    });
  };

  // onClick={() => props.toggle(props.id)} props.task.task?

  render() {
    return (
      <main>
        <h1>{this.state.message}</h1>
        <TodoList
          listArray={this.state.stateArray}
          todoCheck={this.todoCheck}
        />

        <TodoForm
          text={this.state.text}
          handleChanges={this.handleInputChange}
          formAdd={this.handleAdd}
          formClear={this.handleClear}
        />
      </main>
    );
  }
}

// define function in parent component
// pass it down to the child component as a callback
// pass that data into that function.
// easy...r - right ??
// this.setState(() => { })
// groceries: [...this.state.groceries, newItem]
// const newItem = {
// item: item,
//   id: Date.now(),
//     purchased: false
// 	}

// <input
//   type="text"
//   placeholder="Doing something?"
//   onChange={this.handleInputChange}
// />;

export default App;
