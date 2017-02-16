import React from 'react';
import { connect } from 'react-redux';

let AddTodo = ({ dispatch }) => {
    let input;
    let id = 1;
    return (
        <div>
            <input ref={node => input = node} type='text'/>
            <button onClick={() => {
                dispatch({type: 'ADD_TODO', id: id++, task: input.value});
                input.value = '';
            }}>+</button>
        </div>
    );
};

export default connect()(AddTodo);