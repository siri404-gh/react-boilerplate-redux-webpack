import React from 'react';
import { getState, subscribe, dispatch } from '../../redux/store';
let i = 0;
export const AddTodo = () => {
    let input;
    return (
        <div>
            <input ref={node => input = node} type='text'/>
            <button onClick={() => {
                dispatch({type: 'ADD_TODO', id: i++, task: input.value});
                input.value = '';
            }}>+</button>
        </div>
    );
};