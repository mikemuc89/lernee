import React from 'react';
import ReactDOM from 'react-dom';

import App from './App/views/App';

require('./styles/main.scss');


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App/>,
    document.getElementById('mount')
  );
});
