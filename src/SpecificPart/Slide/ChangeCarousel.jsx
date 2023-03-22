import React, {useState, useRef, useEffect} from 'react';
import './ChangeCarousel.scss';

const ChangeCarousel = () => {
    const targetButton = ['Home', 'Setting', 'Account'];
    const contentTitle = ['Home', 'Setting', 'Account'];
    const content = ['Home Detail 내용', 'Setting Detail 내용', 'Account Detail 내용'];
    const backColor = ['#333', 'green', 'blue'];
    const classNames = ['content content1', 'content content2', 'content content3'];
    const targetContent = useRef();
    let targetContentChildren = null;

    const targetMode = (index) => {
        // e.preventDefault();
        targetContentChildren[index].scrollIntoView({behavior: "smooth"});
    }


    useEffect(() => {
        targetContentChildren = targetContent.current.children;
        console.log(targetContentChildren);
    }, []);

    return (
        <div className="change-carousel-contain">
            <ul className='carousel-button-contain'>
            {
                targetButton.map((item, index) => {
                    return <li 
                        onClick={() => targetMode(index)}
                        key={index}>{item}
                    </li>
                })
            }
            </ul>
            <div className="content-contain"
                ref={targetContent}
            >
            {
                contentTitle.map((item, index) => {
                    return (
                        <section className={classNames[index]} key={index}
                            style={{backgroundColor: backColor[index]}}
                        >
                            <h2 className="content-title">{item}</h2>
                            <p className="content-Detail">{content[index]}</p>
                        </section>
                    )
                })
            }
            </div>
        </div>
    );
};

export default ChangeCarousel;