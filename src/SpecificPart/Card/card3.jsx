import React from 'react';
import './card3.scss';
import testImg from '../../../src/img/testImg.png';

const Card3 = () => {
    return (
        <div className='flip-card'>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={testImg} alt="test" />
                </div>
                <div className="flip-card-back">
                    <img src={testImg} alt="test" />
                    <h3 className="text">Wireless Headphone</h3>
                    <h1>R$ 249,90</h1>
                </div>
            </div>
        </div>
    );
};

export default Card3;