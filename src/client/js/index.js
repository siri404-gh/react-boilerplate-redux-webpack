import React from 'react';
import ReactDOM from 'react-dom';

const App = () => (
  <h1>Built using travis, deployed into heroku.</h1>
);

ReactDOM.render(<App/>, document.getElementById('content'));