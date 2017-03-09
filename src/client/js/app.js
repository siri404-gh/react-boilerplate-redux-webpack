import React from 'react';
import ReactDOM from 'react-dom';
import store from './data/store';
import { Provider } from 'react-redux';
import { TodoApp } from './components/TodoApp/TodoApp';

ReactDOM.render(
    <Provider store={store}>
        <TodoApp/>
    </Provider>, document.querySelector('.content')
);

if(module.hot) {
    module.hot.accept();
}