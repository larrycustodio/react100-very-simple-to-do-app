import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoItemsContainer from './TodoItemsContainer';

function TitleContainer(props) {
  return (
    <div className='container-fluid text-white'>
      <h1 className='dislay-3'>Very Simple Todo App</h1>
      <p className='lead'>Track all of the things</p>
    </div>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    }
    this.onAddTodo = this.onAddTodo.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onSaveEdit = this.onSaveEdit.bind(this);
  }

  onAddTodo({ text, priority }) {
    const todoList = this.state.todoList;
    const newTodo = {
      id: Date.now(),
      text: text,
      priority: parseInt(priority),
      editEnabled: false
    }
    const newTodoList = [...todoList, newTodo];
    this.setState({
      todoList: newTodoList
    });
  }

  onSaveEdit(editTodo) {
    editTodo.editEnabled = false;
    const newTodoList = [...this.state.todoList];
    const todoEditIndex = newTodoList.map((todoItem) => {
      return todoItem.id
    }).indexOf(editTodo.id);
    newTodoList.splice(todoEditIndex,1,editTodo);
    this.setState({
      todoList: newTodoList
    });
  }

  onDelete(todoItem) {
    const newTodoList = [...this.state.todoList];
    const todoDeleteIndex = newTodoList.indexOf(todoItem);
    newTodoList.splice(todoDeleteIndex, 1);
    this.setState({
      todoList: newTodoList
    })
  }

  render() {
    return (
      <div className='container p-3'>
        <TitleContainer />
        <hr className='my-3' />
        <div className='row'>
          <div className='col-lg-4 mb-4 mr-auto'>
            <NewTodoForm
              onAddTodo={this.onAddTodo} />
          </div>
          <div className='col-lg-8'>
            <TodoItemsContainer
              list={this.state.todoList}
              onDelete={this.onDelete}
              onSaveEdit={this.onSaveEdit} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
