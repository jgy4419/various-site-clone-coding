import React, {useEffect, useRef} from 'react';
import './DragAndDrop.scss';

const DragAndDrop = () => {
    const boxes = useRef();
    const image = useRef();
    useEffect(() => {
        boxes.current.children.forEach(box => {
            box.addEventListener('dragover', e => {
                e.preventDefault();
                box.classList.add('hovered');
            });

            box.addEventListener('dragleave', () => {
                box.classList.remove('hovered');
            })
    
            box.addEventListener('drop', () => {
                // 드래그 된 박스 밑에 image를 옮겨주고, hoverd 클래스 제거 (스타일 변경)
                box.appendChild(image.current);
                box.classList.remove('hovered');
            })
        })    
    }, []);
        
    
    return (
        <>
            <section ref={boxes} className="drag_and_drop_container">
                <div className="dragbox">
                    <div ref={image} className="image" draggable="true"/>
                </div>
                <div className="dragbox"></div>
                <div className="dragbox"></div>
                <div className="dragbox"></div>
            </section>   
        </>
    );
};

export default DragAndDrop;