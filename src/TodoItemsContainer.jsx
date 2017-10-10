import React, { Component } from 'react';

class TodoItemsContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      id: '',
      text: '',
      priority: '',
      editEnabled: ''
    }
  }

  render() {
    return (
      <div className='card'>
        <div className='card-header'>
          View Todos
        </div>
        <div className='card-body'>
          <ul className='list-group'>
            <li
              key='test'
              className='list-group-item list-group-item-success'>
              <span className='list-text'>Style test ignore</span>
              <span className='float-right'>
                <strong className='mr-2' onClick={this.props.onEdit}>edit</strong>
                <strong className='mr-2' onClick={this.props.onDelete}>delete</strong>
              </span>
            </li>
            {this.props.list.forEach(listItem => {
              return <li keyclassName='list-group-item'>listItem.text</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoItemsContainer;