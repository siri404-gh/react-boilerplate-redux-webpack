import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {TodoApp} from './components/TodoApp/TodoApp';
import reducer from './reducers';
import { createStore } from './redux';
import Provider from './redux/Provider';

ReactDOM.render(
    <Provider store={createStore(reducer)}>
        <TodoApp/>
    </Provider>, document.querySelector('.content')
);