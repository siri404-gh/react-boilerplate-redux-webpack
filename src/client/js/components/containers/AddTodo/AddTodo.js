import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../../actions/AddTodo/AddTodoActions';

let AddTodo = ({ dispatch }) => {
    let input;
    let id = 1;
    return (
        <div>
            <input ref={node => input = node} type='text'/>
            <button onClick={() => {
                dispatch(addTodo(input.value));
                input.value = '';
            }}>+</button>
        </div>
    );
};

export default connect()(AddTodo);