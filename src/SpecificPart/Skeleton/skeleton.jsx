import React from 'react';
import Skeleton2 from './skeleton2';
import './skeleton.scss'

const Skeleton = () => {
    return (
        <>
            <div className='skeleton__container'>
                <div className="first__skeleton">
                    <div className='thin__box'></div>
                    <div className="big__box"></div>
                </div>
            </div>
            <Skeleton2/>
        </>
    );
};

export default Skeleton;