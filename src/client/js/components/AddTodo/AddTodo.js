import React from 'react';

export const AddTodo = ({onTodoAdd}) => {
    let input;
    return (
        <div>
            <input ref={node => input = node} type='text'/>
            <button onClick={() => {
                onTodoAdd(input.value);
                input.value = '';
            }}>+</button>
        </div>
    );
};