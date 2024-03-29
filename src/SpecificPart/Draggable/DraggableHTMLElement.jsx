import React, { useEffect } from 'react';
import './DraggableHTMLElement.scss';

const DraggableHTMLElement = () => {
    useEffect(() => {
        const draggable = document.getElementById('draggable');
        // pos는 요소 위치 mouse는 pos 기준으로 마우스 위치 값 가져옴.
        let posX = 0,
            posY = 0,
            mouseX = 0,
            mouseY = 0;

        const mouseDown = (e) => {
            console.log(e);
            e.preventDefault();
            // clientX, clientY는 브라우저가 사용자에게 웹페이지가 보여지는 영역 기준으로 좌표를 표시해준다.
            // Element.offsetLeft, offsetTop은 상대적 기준인 상위 요소부터 왼쪽 / 오른쪽 값을 계산한다.
            posX = e.clientX - draggable.offsetLeft; // 이동한 X좌표 표시 
            posY = e.clientY - draggable.offsetTop; // 이동한 Y좌표 표시 
            window.addEventListener('mousemove', moveElement, false);
        }

        const mouseUp = () => {
            window.removeEventListener('mousemove', moveElement, false);
        }

        const moveElement = (e) => {
            console.log(posX, e.clientX);
            mouseX = e.clientX - posX;
            mouseY = e.clientY - posY;
            draggable.style.left = mouseX + 'px'; // element 이동 시켜주기
            draggable.style.top = mouseY + 'px'; // element 이동 시켜주기
        }

        draggable.addEventListener('mousedown', mouseDown, false);
        window.addEventListener('mouseup', mouseUp, false);
    }, []);

    return (
        <>
            <div className="draggable__container">
                <div id='draggable'><span id='drag__text' contentEditable="true">Drag me!</span></div>
            </div>
        </>
    );
};

export default DraggableHTMLElement;