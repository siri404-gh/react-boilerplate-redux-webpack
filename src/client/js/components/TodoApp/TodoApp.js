import React from 'react';
import { AddTodo } from '../AddTodo/AddTodo';
import { TodoList } from '../TodoList/TodoList';
import { Footer } from '../Footer/Footer';

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

let i = 0;

export const TodoApp = ({todos, visibilityFilter, dispatch}) =>(
  <div>
    <AddTodo onTodoAdd={task => dispatch({type: 'ADD_TODO', id: i++, task})}/>
    <TodoList todos={getVisibleTodos(todos, visibilityFilter)} onTodoClick={id => dispatch({type: 'TOGGLE_TODO', id})}/>
    <Footer visibilityFilter={visibilityFilter} onFilterClick={filter => dispatch({type: 'SET_VISIBILITY_FILTER', filter: filter})}/>
  </div>
);