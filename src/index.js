import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import {Provider} from 'react-redux';
import {createStore} from 'redux';

import {BrowserRouter} from 'react-router-dom';

// import store from './redux/store';

// console.log(store);

// let store = createStore(() => {
//   return [{id: 0, name: '멋진신발', quan: 2}]
// })

// function reducer(store = store, action){
//   let copy = [...store];
//   if(action.type === "수량증가"){
//     copy[0].quan++;
//     return copy;
//   }
//   else{
//     return store;
//   }
// }

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Provider> */}
        <App />
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
