import React, { useState, useEffect } from 'react';
import './ScrollSideEvent.scss';

const ScrollSideEvent = () => {
    const [arrDiv, setArrDiv] = useState([
        'content1', 'content2', 'content3', 'content4',
        'content5', 'content6', 'content7', 'content8'
    ]);
    useEffect(() => {
        const boxes = document.querySelectorAll(".box");

        const checkBoxes = () => {
            const triggerBottom = window.innerHeight;
            boxes.forEach(box => {
                const boxTop = box.getBoundingClientRect().top;
                if (boxTop < triggerBottom) box.classList.add('show');
                else box.classList.remove('show');
            })
        }

        window.addEventListener('scroll', checkBoxes);
        checkBoxes();
    }, []);
    return (
        <>
            <h1>Scroll Animation</h1>
            {
                arrDiv.map((div, index) => {
                    return (
                        <div key={index} className="box">
                            <h2>{ div }</h2>
                        </div>
                    )
                })
            }
        </>
    );
};

export default ScrollSideEvent;