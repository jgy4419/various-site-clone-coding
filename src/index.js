import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './redux/store';

import {BrowserRouter} from 'react-router-dom';
import ReduxThunk from 'redux-thunk';

// thunk 사용 시 미들웨어에 적용시켜주기.
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
