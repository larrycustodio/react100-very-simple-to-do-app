import React, { Component } from 'react';

function NewTodoText(props) {
  return (
    <div className='form-group'>
      <label htmlFor='createTodoText'>
        <strong>I want to...</strong>
      </label>
      <textarea
        name='text'
        className='form-control'
        onChange={props.onChange} >
      </textarea>
    </div>
  );
}

function NewTodoPriority(props) {
  return (
      <div className='form-group'>
      <label htmlFor='createTodoPriority'>
        <strong>How much of a priority is this?</strong>
      </label>
      <select
        name='priority'
        className='form-control'
        onChange={props.onChange} >
        <option value='1'>Low Priority</option>
        <option value='2'>Medium Priority</option>
        <option value='3'>High Priority</option>
      </select>
    </div>
  );
}
class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      priority: '',
    }
    this.onAddInputChange = this.onAddInputChange.bind(this);
    this.onAddClick = this.onAddClick.bind(this);
  }

  onAddInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onAddClick(event){
    this.props.onAddTodo(this.state);
  }
  render() {
    return (
      <div className='card'>
        <div className='card-header'>
          Add New Todo
        </div>
        <form className='card-body m-3'>
          <fieldset>
            <NewTodoText 
            onChange={this.onAddInputChange} />
            <NewTodoPriority 
            onChange={this.onAddInputChange} />
          </fieldset>
        </form>
        <div className='card-footer'>
          <button onClick={this.onAddClick}
            className='btn btn-success btn-block'>
            Add
          </button>
        </div>
      </div>
    );

  }
}

export default NewTodoForm;
