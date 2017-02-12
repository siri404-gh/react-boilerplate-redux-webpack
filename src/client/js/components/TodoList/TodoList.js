import React from 'react';
import { SingleTodo } from '../SingleTodo/SingleTodo';

export const TodoList = ({todos, onTodoClick}) => (
  <ul>
    {todos.map(todo => <SingleTodo key={todo.id} onClick={() => onTodoClick(todo.id)} task={todo.task} done={todo.done}/>)}
  </ul>
);
