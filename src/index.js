import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"
import allreducer from './reducer/index.js';
import { Provider } from "react-redux"
import { createStore } from "redux"

const Store = createStore(allreducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);
