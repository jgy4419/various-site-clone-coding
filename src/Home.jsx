import React, { useEffect } from 'react';
import './Home.scss';

const Home = () => {
    useEffect(() => {
        console.log(document.querySelector('li').dataset);
    }, []);
    return (
        <>
            <div className="notification">
                <p>Welcome back</p>
                <span className="progress"/>
            </div>
            {/* Floating Placeholder */}
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
        </>
    );
};

export default Home;