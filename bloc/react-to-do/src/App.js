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
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo,index) =>
            <ToDo key={index} description={todo.description} isCompleted={todo.isCompleted}/>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
