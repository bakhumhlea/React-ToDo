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
    console.log("submit is called");
  }
  handleChange(e) {
    this.setState({newToDoDescription : e.target.value});
  }
  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({todos:todos});
    console.log("toggle Completed!");
    console.log(todo.isCompleted);
  }
  render() {
    const newToDo = this.state.newToDoDescription;
    return (
      <div className="App">
        <form onSubmit={ (e)=> this.handleSubmit(e)}>
          <input type="type" value={newToDo} onChange={(e)=> this.handleChange(e)}/>
          <input type="submit"/>
        </form>
        <ul>
          { this.state.todos.map( (todo,index) =>
            <ToDo key={index} description={todo.description} isCompleted={todo.isCompleted} toggleComplete={ ()=> this.toggleComplete(index)}/>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
