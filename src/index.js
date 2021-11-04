import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from 'redux'
import './index.css';
import 'tachyons';
import App from './containers/App';
import { searchRobots } from './reducers';

const store = createStore(searchRobots);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);