import React, { Component } from "react";
class App extends Component {
  state = {
    newTodo: "",
    todos: [
      "Buy tea",
      "Buy boba",
      "Boil water",
      "Add boba",
      "Drain water",
      "Add tea"
    ]
  };
  handleDelete = event => {
    var newTodoList = [...this.state.todos]; 
    var index = newTodoList.indexOf(event.target.value);
    newTodoList.splice(index, 1);
    this.setState({todos: newTodoList});
  };
  handleChange = event => {
    //this.setState({ newTodo: event.target.value });
    var newTodoList = [...this.state.todos]; 
    var index = newTodoList.indexOf(event.target.value);
    newTodoList.setState({ newTodo: event.target.value });
    this.setState({todos: newTodoList});
  };
   handleSubmit = event => {
    event.preventDefault()
    this.setState({
      todos: [...this.state.todos, this.state.newTodo],
      newTodo: ""
    });
  };

  render() {
    return (
      <div>
        <h1> How to make boba at home</h1>
        {this.state.todos.map(todo => (
          <li key={todo}> {todo}</li>
          <div>
            <li key={todo}>
              {todo + " "}
              <button  value={todo} onClick={this.handleDelete}>X</button>
              <div>
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  value={this.state.newTodo}
                  onChange={this.handleChange}
                />
                <button onClick={this.handleSubmit}> + </button>
              </form>
              </div>
            </li>
          </div>
        ))}
      </div>
    );
  }
}

export default App;