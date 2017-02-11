import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { createStore } from './redux';

import reducer from './reducers';

const { getState, subscribe, dispatch } = createStore(reducer);

const FilterLink = ({ filter, currentFilter, children }) => {
  if (filter === currentFilter) {
    return <span>{children}</span>;
  }
  return (
    <a href='#' onClick={e => {
      e.preventDefault();
      dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter: filter
      });
    }}>{children}</a>
  );
};

let i = 0;

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

class TodoApp extends Component {
  render () {
    const { todos, visibilityFilter } = this.props;
    const visibleTodos = getVisibleTodos(todos, visibilityFilter);
    return (
      <div>
        <input ref={node => this.input = node} type='text'/>
        <button onClick={() => {
          dispatch({
            type: 'ADD_TODO',
            id: i++,
            task: this.input.value
          });
          this.input.value = '';
        }}>+</button>
        {visibleTodos.map(todo => {
          return (
            <li  onClick={() => {
              dispatch({
                type: 'TOGGLE_TODO',
                id: todo.id
              });
            }}
            style={{
              textDecoration: todo.done 
                ? 'line-through'
                : 'none'
            }}>{todo.task}</li>
          );
        })}
        <p>
          Show: 
          { ' ' }
          <FilterLink filter='SHOW_ALL' currentFilter={visibilityFilter}>All</FilterLink>
          { ' ' }
          <FilterLink filter='SHOW_DONE' currentFilter={visibilityFilter}>Done</FilterLink>
          { ' ' }
          <FilterLink filter='SHOW_NOT_DONE' currentFilter={visibilityFilter}>Active</FilterLink>
        </p>
      </div>
    );
  }
};

const render = () => {
  ReactDOM.render(<TodoApp {...getState()} />, document.querySelector('.content'));
};

subscribe(render);

render();