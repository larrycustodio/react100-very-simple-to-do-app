import React from 'react';

function NewTodoForm(props) {
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
                <option value='1'>Low Priority</option>
                <option value='2'>Medium Priority</option>
                <option value='3'>High Priority</option>
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

export default NewTodoForm;
  