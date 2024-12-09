// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';  // Import Provider from react-redux
import store from './store';             // Import the Redux store
import App from './App';                 // Import the main App component

ReactDOM.render(
  <Provider store={store}>  {/* Wrap your App component in the Provider */}
    <App />
  </Provider>,
  document.getElementById('root')
);
