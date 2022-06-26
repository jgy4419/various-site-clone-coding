import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Section1 from './BlockChainSection/BlockChainSection1';
import Section2 from './BlockChainSection/BlockChainSection2';
import Section3 from './BlockChainSection/BlockChainSection3';

export default function BlockChainMain(){
    return(
        // 참고 사이트 : https://www.enterpriseblockchain.io/
        <Route exact path="/blockchain">
            {/* <Header/> */}
            <Section1/>
            <Section2/>
            <Section3/>
        </Route>
    )
}

// function Header(){
//     return(
//         <header>헤더~</header>
//     )
// }