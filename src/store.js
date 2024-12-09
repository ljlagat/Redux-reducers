// src/store.js
import { createStore } from 'redux';
import rootReducer from './reducers';  // Import the combined reducers

const store = createStore(rootReducer);  // Create the Redux store with the root reducer

export default store;  // Export the store for use in the Provider
