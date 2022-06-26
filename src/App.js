import './App.scss';
import React, { useEffect, useState, useContext, createContext, lazy, Suspense, memo } from 'react';
import { Link, Route, Switch, useHistory, useParams} from 'react-router-dom';
import {connect, useSelector, useDispatch} from 'react-redux';

import BlockChainMain from './clone/blockchainsite/blockChainMain';

let valueContext = React.createContext();

let testContext = React.createContext();

// Context API
// defaultValue는 적절한 Provider짝을 찾지 못할 때 사용되는 value이다.
let 재고Context = React.createContext();

/* 
  Provider
  - 컴포넌트를 Provider로 감싸주면 그 하위의 모든 컴포넌트들이 Context에 있는 전역 데이터에 접근 가능.
  - value 속성을 지정해주어야하면 이를 하지 않을 경우 defaultValue가 사용된다.
  - value의 값이 바뀔 때마다 Provider에 속해있는 컴포넌트들이 모두 렌더링된다.

  Cunsumet : Context의 변화를 구독하는 컴포넌트이며, 이를 사용하면 함수형 컴포넌트에서 context를 구독할 수 있다.
*/


function App(props) {
  return (
    <div>
      {/* 메인사이트 */}
      <Route exact path= "/">
        <div className="container">
        </div>
      </Route>
      {/* 블록체인 clone 사이트 */}
      <Route exact path="/blockChain">
        <BlockChainMain/>
      </Route>
    </div>
  );
}

export default App;