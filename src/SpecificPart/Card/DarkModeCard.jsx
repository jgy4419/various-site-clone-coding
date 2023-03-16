import React, { useEffect, useRef } from 'react';
import './DarkModeCard.scss';
import image from '../../img/testShoseimg1.png'

const DarkModeCard = () => {
    const bodyEl = document.body;
    const switchRef = useRef();
    const activeTheme = localStorage.getItem('theme');

    // useEffect(() => {
        if(activeTheme) {
            bodyEl.className.add('dark');
        }
    // }, []);

    const backgroundMode = () => {
        bodyEl.classList.toggle('dark');
        if(bodyEl.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
        }else {
            localStorage.removeItem('theme');
        }
    }

    return (
        <div className="darkModeCardContain">
            <button ref={switchRef} className="switch" onClick={backgroundMode()}>mode</button>
            <p>Mode</p>
            <div className="container">
                <article className="card">
                    <div className="card__image">
                        <img src={image} alt="image" />
                    </div>
                    <div className="card__body">
                        <h2 className="card__title">text</h2>
                        <h3 className="card__subtitle">text</h3>
                        <p>text1</p>
                        <p>text2</p>
                        <a href="#" className="card__button">
                            a-text<span>&rarr;</span>
                        </a>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default DarkModeCard;