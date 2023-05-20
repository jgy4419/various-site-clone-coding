import React from 'react';
import './skeleton.scss'

const Skeleton = () => {
    return (
        <div className='skeleton__container'>
            <div className="first__skeleton">
                <div className='thin__box'></div>
                <div className="big__box"></div>
            </div>
        </div>
    );
};

export default Skeleton;