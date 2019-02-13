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
    // wait, would "on an object" be saved? hmm...
    this.state = {
      message: "Go on...",
      loading: "",
      saved: "Nothing saved."
    };
  }

  handleAdd = event => {
    console.log(event.target.value);
    this.setState({
      message: "Yay!",
      saved: this.state.loading
    });
  };

  handleInputChange = event => {
    this.setState({
      loading: event.target.value
    });
  };

  handleClear = event => {
    this.setState({});
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>

        <TodoForm
          text={this.state.saved}
          handleChanges={this.handleInputChange}
          formAdd={this.handleAdd}
          formClear={this.handleClear}
        />
      </div>
    );
  }
}

// <input
//   type="text"
//   placeholder="Doing something?"
//   onChange={this.handleInputChange}
// />;

export default App;
