import React from 'react';
import './Effect1.scss'
import nike from './nike.png'

const Effect1 = () => {
    return (
        <div className="effect1_contain">
            <span className="parallax-text" text="NIKE">NIKE</span>
            <img src={nike} alt="" />
        </div>
    );
};

export default Effect1;