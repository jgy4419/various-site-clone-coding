import React, { useEffect, useState, useCallback, useMemo } from 'react';
import './Home.scss';
import LazyImage from './lazy/LazyImage';
import SecondChild from './SecondChile';

function FirstChild({value}){
    console.log('FirstChild 리렌더링 발생.');
    return <>{value}</>
}

// // 변경된 state 전달 x. 그런데 리렌더링 발생.
// function SecondChild({ onClick }){
//     console.log('SecondChild 리렌더링 발생');
//     return  (
//         <div onClick={onClick}>
//             {/* 1000개의 grandChild 컴포넌트들을 자식으로 가지고 있음. */}
//             {Array.from({length: 1000}).map((_, idx) => {
//                 <GrandChild key={idx + 1} order={idx}/>
//             })}
//         </div>
//     )
// }



function Home(InnerComponent){
    const [valueForFirstChild, setValueForFirstChild] = useState(null);

    const handleClick = useCallback(() => {}, []);

    const item = {
        name: 'Thinkpad',
        price: '1,000,000'
    };

    const memoizationItem = useMemo(() => item, []);

    useEffect(() => {
        setTimeout(() => {
            setValueForFirstChild('changeValue');
        }, 3000);
    }, []);
    return (
        <>
            <FirstChild value={valueForFirstChild} />
            <SecondChild item={memoizationItem}/>
            {/* flex -> grid */}
            {/* <div className="wrapper">
                <header>header</header>
                <section>
                    <nav>Nav</nav>
                    <main>Main</main>
                    <aside>Aside</aside>
                </section>
                <footer>Footer</footer>
            </div>
            <div className="notification">
                <p>Welcome back</p>
                <span className="progress"/>
            </div>
            <div className="input-group">
                <input type="text" className="input" placeholder=" "/>
                <label className="placeholder">username</label>
            </div>
            <p className="paragraph">
                <span style={{"--delay": "0s"}}>test1</span>
                <span style={{"--delay": "1s"}}>test2</span>
                <span style={{"--delay": "2s"}}>test2</span>
            </p>  

            <ul>
                <li className="test" data-id="1" data-user-job="programmer">Zero</li>
                <li className="test" data-id="2" data-user-job="designer">abc</li>
                <li className="test" data-id="3" data-user-job="programs">Hero</li>
                <li className="test" data-id="4" data-user-job="ceo">Kero</li>
            </ul>

            <div className="gradient-background"/> */}
        </>
    );
};

export default Home;
