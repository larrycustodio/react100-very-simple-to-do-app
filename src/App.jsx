import React, { Component } from 'react';
import TodoItem from './todoItem';

function TitleContainer(props) {
  return (
    <div className='container-fluid'>
      <h1 className='dislay-3'>Very Simple Todo App</h1>
      <p className='lead'>Track all of the things</p>
    </div>
  );
} 
function TodoCreateItem(props){
  return (
    <div className='card'>
      <div className='card-header'>
        Add New Todo
      </div>
      <form className='card-body m-3'>
        <fieldset>
          <div className='form-group'>
            <label htmlFor='createTodoText'>
              <strong>I want to...</strong>
            </label>
            <textarea 
            name='text'
            className='form-control'
            onChange={props.onChange}
            >
            </textarea>
          </div>
          <div className='form-group'>
            <label htmlFor='createTodoPriority'>
              <strong>How much of a priority is this?</strong>
            </label>
            <select 
            name='priority'
            className='form-control'
            onChange={props.onChange}
            >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>              
            </select>
          </div>
        </fieldset>
      </form>
      <div className='card-footer'>
        <button 
        className='btn btn-success btn-block'
        onClick={props.onClick}
        >
          Calculate
        </button>
      </div>
    </div>
  );
}

function TodoItemsContainer(props){
  return (
    <div className='card'>
      <div className='card-header'>
        View Todos
      </div>
      <div className='card-body'>
          {props.todoList.map(todoItem => {
            
            {/* <TodoItem
            key={'todo-' + todoItem.priority}
            text={todoItem.text}
            priority={todoItem.priority}
            /> */}
          })}
      </div>
    </div>
  );
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todoList: [
        {
          text: 'Take out the trash',
          priority: 1,
        },
        {
          text: 'Pick up milk from the market',
          priority: '2',
        },
        {
          text: 'Go to the gym and exercise',
          priority: '3' 
        }
      ]
    }
    this.handlePostTodo = this.handlePostTodo.bind(this);
    this.handleCreateTodo = this.handleCreateTodo.bind(this);
  }
  handleCreateTodo(e){
    const target = e.target;
    const createTodoData = {
      [target.name]: target.value
    }
  }
  handlePostTodo(e){
    e.preventDefault();
    let todoList = this.state.todoList;
    this.setState(todoList);
  }
  render() {
    return (
      <div className='container p-3'>
        <TitleContainer />
        <hr className='my-3' />
        <div className='row'>
          <div className='col-lg-4 mb-4 mr-auto'>
            <TodoCreateItem
            onChange={this.handleCreateTodo} 
            onClick={this.handlePostTodo}
            />
          </div>
          <div className='col-lg-8'>
            <TodoItemsContainer 
            todoList={this.state.todoList}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
