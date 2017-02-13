import React from 'react';
import { AddTodo } from '../AddTodo/AddTodo';
import TodoList from '../TodoList/TodoList';
import { Footer } from '../Footer/Footer';

export const TodoApp = () =>(
  <div>
    <AddTodo/>
    <TodoList/>
    <Footer/>
  </div>
);