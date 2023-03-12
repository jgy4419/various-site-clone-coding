import React, { useRef } from 'react';
import './CircularProgressBar.scss';

const CircularProgressBar = () => {
    let circularProgress = useRef(null);
    let progressValue = useRef(null);

    let [progressStartValue, progressEndValue, speed] = [0, 90, 100];

    const progress = setInterval(() => {
        progressStartValue++;
        progressValue.current.textContent = `${progressStartValue}%`;
        circularProgress.current.style.background = `conic-gradient(#7d2ae8 
            ${progressStartValue * 3.6}deg, #ededed 0deg)`;
        if(progressStartValue === progressEndValue + 8) {
            clearInterval(progress);
        }
    }, speed);

    return (
        <div className="circularProgressBar_container">
            <div className="curcular-progress" ref={circularProgress}>
                <span className="progress-value" ref={progressValue}>0%</span>
            </div>
            <span className="text">React</span>
        </div>
    );
};

export default CircularProgressBar;