import React from 'react';
import ReactDOM from 'react-dom';

<<<<<<< HEAD
import { createStore } from './redux';
=======
const App = () => (
  <h2>React boilerplate app for MERN Projects with Continous Integration and Continous Deployment using Travis and Heroku.
Also includes Karma-Jasmine Unit Test setup with code coverage report and documentation using JSDOCS.</h2>
);
>>>>>>> 31bd1e7b7e28e8e8d057d3cef50944d2c50c7cf3

import App from './components/app/app';
import reducer from './reducers';

const { getState, subscribe, dispatch } = createStore(reducer);

// const render = () => {
//   ReactDOM.render(<App />, document.querySelector('.content'));
// };

// subscribe(render);

// render();

// console.log(reducer());