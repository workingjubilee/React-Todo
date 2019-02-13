import React from "react";
import Todo from "./components/TodoComponents/Todo";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

//  Your todo list should display a list of todos,
//  (0[1]) an input field
//  (0[2]) a submit button
//  (0[1]) and a clear all button.
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
    this.state = {
      message: "Go on..."
    };
  }

  handleSingleClickEvent = event => {
    console.log(event.target.value);
    this.setState({
      message: "Yay!"
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.handleSingleClickEvent}>Click Me</button>
      </div>
    );
  }
}

export default App;
