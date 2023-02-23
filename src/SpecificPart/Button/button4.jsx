import React from 'react';
import './button4.scss';

const Button4 = () => {
    return (
        <div className="button4_contain">
            <div className="share">
                <span>Share</span>
                <nav className="buttons">
                    <button className="button"><i className="fa twitter">T</i></button>
                    <button className="button"><i className="fa facebook">F</i></button>
                    <button className="button"><i className="fa google"></i>g</button>
                    <button className="button"><i className="fa github"></i>git</button>
                </nav>
            </div>
        </div>
    );
};

export default Button4;