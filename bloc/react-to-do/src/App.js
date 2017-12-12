import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos : [
        {description:"Watch Star Wars", isCompleted: true},
        {description:"Go have Pizza!", isCompleted: false},
        {description:"Hang Out with Friend", isCompleted: false}
      ],
      newToDoDescription : ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const newToDo = {description: this.state.newToDoDescription , isCompleted: false};
    this.setState({todos : [...this.state.todos, newToDo], newToDoDescription: ''});
  }
  handleChange(e) {
    this.setState({newToDoDescription : e.target.value});
  }
  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({todos:todos});
  }

  handleClick(index) {
    const todos = this.state.todos.slice();
    const filtered = function (item) {
      return item !== todos[index];
    };
    var newToDo = todos.filter(filtered);
    this.setState({todos: newToDo});
  }

  render() {
    const newToDo = this.state.newToDoDescription;
    return (
      <div className="App">
        <h1>To Do App</h1>
        <form onSubmit={ (e)=> this.handleSubmit(e)}>
          <div>
            <input type="text" value={newToDo} onChange={(e)=> this.handleChange(e)}/>
            <button type="submit" class='button -regular center' id="button">Create</button>
          </div>
        </form>
        <ul>
          { this.state.todos.map( (todo,index) =>
            <ToDo key={index} description={todo.description} isCompleted={todo.isCompleted} toggleComplete={ ()=> this.toggleComplete(index)} deleteItem={(e)=> this.handleClick(index)}/>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
