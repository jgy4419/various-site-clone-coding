import React from 'react';
import MultiStepProgress from './MultiStepProgress';
import CircularProgressBar from './CircularProgressBar';


const ProgressBar = () => {
    return (
        <div>
            <MultiStepProgress/>
            <CircularProgressBar/>
        </div>
    );
};

export default ProgressBar;