import React, { useEffect } from 'react';
import './DraggableHTMLElement.scss';

const DraggableHTMLElement = () => {
    useEffect(() => {
        const draggable = document.getElementById('draggable');

        let posX = 0,
            posY = 0,
            mouseX = 0,
            mouseY = 0;

        const mouseDown = (e) => {
            e.preventDefault();
            posX = e.clientX - draggable.offsetLeft;
            posY = e.clientY - draggable.offsetTop;
            window.addEventListener('mousemove', moveElement, false);
        }

        const mouseUp = () => {
            window.removeEventListener('mousemove', moveElement, false);
        }

        const moveElement = (e) => {
            mouseX = e.clientX - posX;
            mouseY = e.clientY - posY;
            draggable.style.left = mouseX + 'px';
            draggable.style.top = mouseY + 'px';
        }

        draggable.addEventListener('mousedown', mouseDown, false);
        window.addEventListener('mouseup', mouseUp, false);
    }, []);

    return (
        <>
            <div className="draggable__container">
                <div id='draggable'>Drag me!</div>
            </div>
        </>
    );
};

export default DraggableHTMLElement;