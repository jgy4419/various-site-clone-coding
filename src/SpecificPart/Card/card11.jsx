import React from 'react';
import './card11.scss';
import Image from '../../img/testShoseimg1.png';

const Card11 = () => {
    return (
        <>
            <div className="card11Contains">
                <figure className="card11ContainsInner">
                    <div className="card11_dark_background"/>
                    <img className='card__image' src={Image} alt="배경 이미지" />
                    <figcaption className='card__body'>
                        <h2 className='card__title'>SOME TITLE</h2>
                        <p className="card__description">Some description about this card and it's ourpose.</p>
                    </figcaption>
                </figure>
            </div>
        </>
    );
};

export default Card11;