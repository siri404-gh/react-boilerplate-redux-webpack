import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from './redux';
import reducer from './reducers';
import {TodoApp} from './components/TodoApp/TodoApp';

const { getState, subscribe, dispatch } = createStore(reducer);

const render = () => ReactDOM.render(<TodoApp {...getState()} dispatch={dispatch}/>, document.querySelector('.content'));

subscribe(render);

render();