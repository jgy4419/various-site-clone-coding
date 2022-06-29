import './App.scss';
import React, { useEffect, useState, useContext, createContext, lazy, Suspense, memo } from 'react';
import { Link, Route, Switch, useHistory, useParams} from 'react-router-dom';
import BlockChainMain from './clone/blockchainsite/blockChainMain';
import Card from './SpecificPart/Card/card';
import Button from './SpecificPart/Button/button';
import Slide from '../src/SpecificPart/Slide/slide';


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
      {/* UI 특정 부분(Card) */}
      <Route exact path="/card">
        <Card/>
      </Route>
      {/* UI 특정 부분(Button) */}
      <Route exact path="/button">
        <Button/>
      </Route>
      {/* UI 특정 부분(Slide) */}
      <Route exact path="/slide">
        <Slide/>
      </Route>
    </div>
  );
}

export default App;