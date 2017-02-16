import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from './redux';
// import Provider from './redux/Provider';
// import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import {TodoApp} from './components/TodoApp/TodoApp';

ReactDOM.render(
    <Provider store={createStore(reducer)}>
        <TodoApp/>
    </Provider>, document.querySelector('.content')
);