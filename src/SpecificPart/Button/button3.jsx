import React from 'react';
import './button3.scss'

const Button3 = () => {
    return (
        <div className="about-button-content">
            <button className="about-me">
                <span className="circle">
                    <div className="icon arrow"><p className="arrow-text">></p></div>
                    {/* <span className="icon arrow"></span> */}
                </span>
                <span className="button-text">jgy_98</span>
            </button>
        </div>
    );
};

export default Button3;