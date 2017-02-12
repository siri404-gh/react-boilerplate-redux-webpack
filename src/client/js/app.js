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

const SingleTodo = ({onClick, done, task}) => {
  return (
  <li  onClick={onClick}
    style={{
      textDecoration: done ? 'line-through' : 'none'
    }}>{task}</li>
  );
};

const TodoList = ({todos, onTodoClick}) => {
  return (
    <ul>
      {todos.map(todo => <SingleTodo key={todo.id} onClick={() => onTodoClick(todo.id)} task={todo.task} done={todo.done}/>)}
    </ul>
  );
};

const AddTodo = ({onTodoAdd}) => {
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

class TodoApp extends Component {
  render () {
    const { todos, visibilityFilter } = this.props;
    const visibleTodos = getVisibleTodos(todos, visibilityFilter);
    return (
      <div>
        <AddTodo onTodoAdd={task => {
          dispatch({
            type: 'ADD_TODO',
            id: i++,
            task
          });
        }}/>
        <TodoList todos={visibleTodos} onTodoClick={(id) => {
          dispatch({
            type: 'TOGGLE_TODO',
            id
          });
        }}/>
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