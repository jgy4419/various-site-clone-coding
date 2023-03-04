import React, { useRef, useState } from 'react';
import './MultiStepProgress.scss';

const MultiStepProgress = () => {
    let [currentProgress, setCurrentProgress] = useState(1);
    const circle = useRef();
    const progressBar = useRef();
    const progressArr = [2, 3, 4];
    
    const minusSteps = (e) => {
        let progressCount = Number(circle.current.childNodes[currentProgress - 2].textContent);
        progressBar.current.style = `width: ${(progressCount - 1) * 25}%`;   
        setCurrentProgress(currentProgress -= 1);
        if (currentProgress === progressCount) { 
            circle.current.childNodes[progressCount].classList.remove('active');
        }
    }

    const addSteps = (e) => {
        let progressCount = Number(circle.current.childNodes[currentProgress - 1].textContent);
        setCurrentProgress(prev => prev += 1);
        progressBar.current.style = `width: ${progressCount * 25}%`;   
        if (currentProgress === progressCount) {
            circle.current.childNodes[progressCount].classList.add('active');
        }
    }

    return (
        <div className="container">
            <div className="steps" ref={circle}>
                <spen className="circle active">1</spen>
                {
                    progressArr.map((i) => (
                        
                        <span className="circle">{i}</span> 
                    ))
                }
                <div className="progress-bar">
                    <span ref={progressBar} className="indicator"></span>
                </div>
            </div>
            <div className="buttons">
                <button id="prev" disabled={currentProgress === 1 ? true : false} onClick={(() => {minusSteps()})}>Prev</button>
                <button id="next" disabled={currentProgress === 4 ? true : false} onClick={() => {addSteps()}}>Next</button>
            </div>
        </div>
    );
};

export default MultiStepProgress;