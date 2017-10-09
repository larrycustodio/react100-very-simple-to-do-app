import React from 'react';

function TodoItemsContainer(props) {
  const todoList = props.todoList;
  const todoItems = todoList.map((todoItem) => {
    return (
    <li 
      className='list-group-item p-2'>
      <span>{todoItem.text}</span> 
      <div className='float-right'>
        <strong className='list-modify text-info' onClick={props.onEdit}>
          Edit
        </strong> 
        <strong className='list-modify text-danger' onClick={props.onDelete}>
          Delete
        </strong>
      </div>
    </li>
    );
  });
  return (
    <div className='card'>
      <div className='card-header'>
        View Todos
      </div>
      <div className='card-body'>
        <ul className='list-group'>{todoItems}</ul>
      </div>
    </div>
  );
}

export default TodoItemsContainer;