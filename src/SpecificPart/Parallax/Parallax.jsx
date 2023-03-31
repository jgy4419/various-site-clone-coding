import React, {useState} from 'react';
import useParallax from './useParallax';
import './Parallax.scss';
import S from './S.Parallax';

const Parallax = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    useParallax(setScrollPosition);
    return (
        <>
            <section 
                style={{
                    backgroundSize: `${(window.outerHeight - scrollPosition) / 5}%`
                }}
                className="banner"
            >
                <h2>Parallax</h2>
                <button>Get Started</button>
            </section>
            <div className='content'>
                <p>
                    -------------------------------- 페이지 내용 --------------------------------
                </p>
            </div>
        </>
    );
};

export default Parallax;