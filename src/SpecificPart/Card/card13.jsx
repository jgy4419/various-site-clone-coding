import React from 'react';
import './card13.scss';

const Card13 = () => {
    return (
        <>
            <article className='card13__contain'>
                <div className="card__publication">
                    <div className='etc'>
                        <span className="card__author">
                            Julio Codes
                        </span> <br/>
                        <span className='card__date'>
                            04/24/2023
                        </span>
                    </div>
                </div>
                <div className='card__info'>
                    <h2 className="card__title">Artificial intelligence</h2>
                    <span className="card__subtitle">IS THIS THE END OF THE HUMAN RACE?</span><br/>
                    <p className="card__description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam aliquid
                        asperiores corporis earum et, laborum maxime molestias non odit omnis,
                        praesentium. Et hic molestiae odio repellat, rerum sint vitae?
                    </p> <br/>
                    <a href="#" className="card__cta">
                        Read more  <span>&rarr;</span>
                    </a>
                </div>
            </article>
        </>
    );
};

export default Card13;