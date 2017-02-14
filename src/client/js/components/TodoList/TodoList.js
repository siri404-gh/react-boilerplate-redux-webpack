import React, { Component } from 'react';
import { SingleTodo } from '../SingleTodo/SingleTodo';

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
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render () {
        const {store} = this.context;
        const state = store.getState();
        const todos = getVisibleTodos(state.todos, state.visibilityFilter);
        return (
            <ul>
                {todos.map(todo => <SingleTodo key={todo.id} onClick={id => store.dispatch({type: 'TOGGLE_TODO', id: todo.id})} task={todo.task} done={todo.done}/>)}
            </ul>
        );
    }
}

TodoList.contextTypes = {
    store: React.PropTypes.object
};