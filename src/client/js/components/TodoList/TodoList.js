import React, { Component } from 'react';
import { SingleTodo } from '../SingleTodo/SingleTodo';
import { getState, subscribe, dispatch } from '../../redux/store';

const getVisibleTodos = (todos, filter = 'SHOW_ALL') => {
    switch(filter) {
    case 'SHOW_ALL':
        return todos;
    case 'SHOW_DONE':
        return todos.filter(t => t.done);
    case 'SHOW_NOT_DONE':
        return todos.filter(t => !t.done);
    default:
        return todos;
    }
};

export default class TodoList extends Component {
    componentWillMount() {
        this.unsubscribe = subscribe(() => this.forceUpdate());
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render () {
        const state = getState();
        const todos = getVisibleTodos(state.todos, state.visibilityFilter);
        return (
            <ul>
                {todos.map(todo => <SingleTodo key={todo.id} onClick={id => dispatch({type: 'TOGGLE_TODO', id: todo.id})} task={todo.task} done={todo.done}/>)}
            </ul>
        );
    }
}
