import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.list;
    this.onEditEnable = this.onEditEnable.bind(this);
    this.onEditTodo = this.onEditTodo.bind(this);
    this.onDeleteTodo = this.onDeleteTodo.bind(this);
    this.onCloseEdit = this.onCloseEdit.bind(this);
    this.onSaveEdit = this.onSaveEdit.bind(this);
  }
  onEditEnable(event) {
    this.setState({
      editEnabled: true
    });
  }
  onCloseEdit(event) {
    this.setState({
      editEnabled: false
    })
  }
  onEditTodo(event) {
    const todoList = [...this.state.todoList];
    
  }
  onSaveEdit(event) {
    event.preventDefault();
  }
  onDeleteTodo(event) {
    this.props.onDeleteTodo(this.state);
  }
  render() {
    let todoColor = '';
    if(this.state.priority == 3){
      todoColor = '-danger text-danger';
    } else if (this.state.priority == 2){
      todoColor = '-warning text-warning';
    } else {
      todoColor = '-success text-success'
    }
    if (this.state.editEnabled == true) {
      return (
        <div className={'list-group-item list-group-item' + todoColor}>
          <div 
          className='close-edit close float-right'
          onClick={this.onCloseEdit}>
          ×
          </div>
          <form className='edit-form m-2'>
            <div className='form-group'>
              <label htmlFor='editTodoText'>
                <strong>Description</strong>
              </label>
              <textarea
                name='text'
                id='editTodoText'
                className='update-todo-text form-control'
                onChange={this.onEditTodo}
                value={this.state.text}>
              </textarea>
            </div>
            <div className='form-group'>
              <label htmlFor='editTodoPriority'>
                <strong>Priority</strong>
              </label>
              <select
                name='priority'
                id='editTodoPriority'
                className='update-todo-priority form-control'
                onChange={this.onEditTodo}
                value={this.state.priority}>
                <option value='1'>Low Priority</option>
                <option value='2'>Medium Priority</option>
                <option value='3'>High Priority</option>
              </select>
            </div>
            <div className='form-group'>
              <button
              className='btn btn-success float-right update-todo'
              onClick={this.onSaveEdit}>
              Save
              </button>
            </div>
          </form>
        </div>
      )
    } else {
      return (
        <li
          key={this.state.id}
          className={'list-group-item list-group-item'+todoColor}>
          <span className='item-text'>
            {this.state.text}
          </span>
          <span className='float-right'>
            <strong
              className='edit-todo mr-3'
              onClick={this.onEditEnable}>
              edit
          </strong>
            <strong
              className='delete-todo mr-3'
              onClick={this.onDeleteTodo}>
              delete
          </strong>
          </span>
        </li>
      );
    }
  }
}

function TodoItemsContainer(props) {
  return (
    <div className='card'>
      <div className='card-header'>
        View Todos
        </div>
      <div className='card-body'>
        <ul className='list-group'>
          {props.list.map(listItem => {
            return (
              <ListItem 
                key={parseInt(Date.now() * Math.random())}
                list={listItem}
                onDeleteTodo={props.onDelete} />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default TodoItemsContainer;