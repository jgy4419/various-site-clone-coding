import './App.scss';
import React, { useEffect, useState, useReducer, useMemo, useRef } from 'react';
import { Link, Route, Switch, useHistory, useParams} from 'react-router-dom';

// cloneCoding
import BlockChainMain from './clone/blockchainsite/blockChainMain';
import ChungJungWonMain from '../src/clone/blockchainsite/ChungJungWonMain';

// SpecificPart
import Card from './SpecificPart/Card/card';
import Button from './SpecificPart/Button/button';
import Slide from '../src/SpecificPart/Slide/slide';
import Text from './SpecificPart/Text/Text';
import Menu from './SpecificPart/MenuBar/Menu';
import InfiniteScroll from './SpecificPart/Scroll/infiniteScroll';
import Home from './Home';
import UnMountText from './SpecificPart/Unmount/UnmountText';
import Sceleton from './SpecificPart/Loading/Skeleton';
import Drag from './SpecificPart/Drag/Drag';


function App(props) {
  return (
    // <RecoilRoot>
      <div>
        {/* 메인사이트 */}
        <Route exact path= "/">
          <Home/>
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
        {/* UI 특정 부분(Menu) */}
        <Route exact path="/menu">
          <Menu/>
        </Route>
        {/* 무한스크롤 */}
        <Route exact path="/infiniteScroll">
          <InfiniteScroll/>
        </Route>
        {/* unmountText 애니메이션 */}
        <Route exact path="/unmountText">
          <UnMountText/>
        </Route>
      {/* 스켈레톤 UI */}
      <Route exact path="/sceleton">
        <Sceleton/>
      </Route>
      {/* Drag 기능 */}
      <Route exact path="/drag">
        <Drag/>
      </Route>
        {/* ToDoList */}
        {/* <Route exact path="/todoList">
          <TodoList/>
        </Route> */}
      </div>
    // </RecoilRoot>
  );
}

export default App;
