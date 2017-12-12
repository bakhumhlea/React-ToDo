import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
      <li>
        <div class="checkboxTwo">
          <input type="checkbox" value="1" id="checkboxTwoInput" checked={this.props.isCompleted} onChange={this.props.toggleComplete}/>
          <label for="checkboxTwoInput"></label>
        </div>
        <span>{this.props.description}</span>
        <button type="button" class='button -salmon center' onClick={this.props.deleteItem}>Delete</button>
      </li>
    );
  }
}

export default ToDo;
