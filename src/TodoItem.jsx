import React from 'react';

const TodoItem = (props) => {
    return (
        <div className='list-item'>
            {props.text}
            {props.priority}
            <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
            <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
        </div>
    );
}

export default TodoItem;