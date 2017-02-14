import React from 'react';

export const AddTodo = (props, { store }) => {console.log('store', store.getState());
    let input;
    let i = 0;
    return (
        <div>
            <input ref={node => input = node} type='text'/>
            <button onClick={() => {
                store.dispatch({type: 'ADD_TODO', id: i++, task: input.value});
                input.value = '';
            }}>+</button>
        </div>
    );
};

AddTodo.contextTypes = {
    store: React.PropTypes.object
};