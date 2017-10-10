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
      todoList: [
        {
          id: 1,
          text: 'Take out the trash',
          priority: 1,
          editEnabled: false,

        },
        {
          id: 2,
          text: 'sample list item',
          priority: 2,
          editEnabled: false
        }
      ]
    }
    this.onAddTodo = this.onAddTodo.bind(this);
  }

  onAddTodo({text,priority}) {
    const todoList = this.state.todoList;
    const newTodo = {
      id: this.state.todoList.length + 1,
      text: text,
      priority: parseInt(priority),
      editEnabled: false
    }
    const newTodoList = [...todoList,newTodo];
    this.setState({
      todoList: newTodoList
    });
  }
  
  onEditTodo(event){
    console.log('todo edit this guy');
  }

  onDeleteTodo(event){
    console.log('todo delete this guy');
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
              onEdit={this.onEditTodo}
              onDelete={this.onDeleteTodo} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
