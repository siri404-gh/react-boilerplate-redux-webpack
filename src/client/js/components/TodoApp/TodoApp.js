import React from 'react';
import AddTodo from '../containers/AddTodo/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList/VisibleTodoList';
import { Footer } from '../presentational/Footer/Footer';
import AppBarExampleIcon from '../presentational/AppBar/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export const TodoApp = () =>(
    <div>
        <MuiThemeProvider>
            <AppBarExampleIcon/>
        </MuiThemeProvider>
        <AddTodo/>
        <VisibleTodoList/>
        <Footer/>
    </div>
);