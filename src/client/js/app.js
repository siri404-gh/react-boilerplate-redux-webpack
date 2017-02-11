import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from './redux';

import App from './components/app/app';
import reducer from './reducers';

const { getState, subscribe, dispatch } = createStore(reducer);

// const render = () => {
//   ReactDOM.render(<App />, document.querySelector('.content'));
// };

// subscribe(render);

// render();

// console.log(reducer());