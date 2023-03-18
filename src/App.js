import './App.scss';
import React, { useEffect, useState, useReducer, useMemo, useRef } from 'react';
import { Link, Route, Switch, useHistory, useParams} from 'react-router-dom';

// cloneCoding
import BlockChainMain from './clone/blockchainsite/blockChainMain';
import ChungJungWonMain from '../src/clone/blockchainsite/ChungJungWonMain';
import YoguyoOrder from './clone/blockchainsite/Yogiyo(Order)';

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
import Grid1 from './SpecificPart/Grid/Grid1';
import Grid2 from './SpecificPart/Grid/Grid2';
import Header1 from './SpecificPart/Header/header1';
import ScrollSideEvent from './SpecificPart/Scroll/ScrollSideEvent';
import Login from './SpecificPart/Login/Login';
import Test from './SpecificPart/Loading/Test';
import Effect from './SpecificPart/Effect/Effect';
import ProgressBar from './SpecificPart/Progressbar/ProgressBarIndex';
import DragAndDrop from './SpecificPart/DragAndDrop/DragAndDrop';
import Parallax from './SpecificPart/Parallax/Parallax';

// Technology
import Pagination from './Technology/pagenation/index.jsx';
import Search from './Technology/search/SearchIndex';
import KeyWord from './Technology/keyWord/KeyWord';
import InfiniteScroller from './Technology/infiniteScroll/InfiniteScroll';
// import InfiniteScroll from './Technology/infiniteScroll/InfiniteScroll';

// import Hoc from './Hoc/Hoc';

function App(props) {
  return (
    // <RecoilRoot>
    <div>
      <Route exact path="/test">
        <Test/>
      </Route>
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
      <Route exact path="/scrollSideEvent">
          <ScrollSideEvent/>
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
      <Route exact path="/grid1">
        <Grid1/>
      </Route>
      <Route exact path="/grid2">
        <Grid2/>
      </Route>
      <Route exact path="/header1">
        <Header1/>    
      </Route>
      <Route exact path="/login">
        <Login/>
      </Route>
      <Route exact path="/effect">
        <Effect/>
      </Route>
      <Route exact path="/ProgressBar">
        <ProgressBar/>
      </Route>
      <Route exact path="/draganddrop">
        <DragAndDrop/>
      </Route>
      <Route exact path="/pagination">
        <Pagination/>
      </Route>
      <Route exact path="/search">
          <Search/>
      </Route>
      <Route exact path="/KeyWord">
        <KeyWord/>
      </Route>
      <Route exact path="/InfiniteScroller">
        <InfiniteScroller/>
      </Route>
      <Route exact path="/yoguyoOrder">
        <YoguyoOrder/>
      </Route>
      <Route exact path="/Parallax">
        <Parallax/>
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
