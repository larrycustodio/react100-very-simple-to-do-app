import React, { Component } from 'react';

class TodoItemsContainer extends Component {
  constructor(props) {
    super();
    this.state = {

    }
  }
  onEdit(event){

  }
  onDelete(event){

  }
  render() {
    return (
      <div className='card'>
        <div className='card-header'>
          View Todos
        </div>
        <div className='card-body'>
          <ul className='list-group'>
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoItemsContainer;