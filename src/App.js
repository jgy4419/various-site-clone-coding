import './App.scss';
import React, { useEffect, useState, useContext, createContext, lazy, Suspense, memo } from 'react';
import { Link, Route, Switch, useHistory, useParams} from 'react-router-dom';

// cloneCoding
import BlockChainMain from './clone/blockchainsite/blockChainMain';
import ChungJungWonMain from '../src/clone/blockchainsite/ChungJungWonMain';

// SpecificPart
import Card from './SpecificPart/Card/card';
import Button from './SpecificPart/Button/button';
import Slide from '../src/SpecificPart/Slide/slide';
import Text from './SpecificPart/Text/Text';


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
      {/* 청정원 clone 사이트 */}
      <Route exact path="/chungJungWon">
        <ChungJungWonMain/>
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
      {/* UI 특정 부분(Text) */}
      <Route exact path="/text">
        <Text/>
      </Route>
    </div>
  );
}

export default App;