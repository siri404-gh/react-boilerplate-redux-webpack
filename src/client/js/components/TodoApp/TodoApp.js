import React from 'react';
import AddTodo from '../AddTodo/AddTodo';
import VisibleTodoList from '../VisibleTodoList/VisibleTodoList';
import { Footer } from '../Footer/Footer';

export const TodoApp = () =>(
  <div>
    <AddTodo/>
    <VisibleTodoList/>
    <Footer/>
  </div>
);