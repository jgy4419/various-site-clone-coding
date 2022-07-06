import React, {useEffect} from 'react';
import './Text1.scss';

export default function Text1(){
    useEffect(() => {
        let textBackColor = document.querySelectorAll('.textBackColor');
        textBackColor.forEach(e => {
            let delay = 0.3;
            e.style.transform = 'translateX(400px)';
            e.style.transition = `${0.7 + delay}s`
        });

        let text = document.querySelectorAll('.text');
        text.forEach(text => {
            setTimeout(() => {
                text.style.opacity = 1
                text.style.transform = 'translateX(0px)'
            }, 700);;
        })
    }, []);
    return(
        <>
            <div className="text1Contain">
                <ul className="textBox">
                    {
                        ['안녕하세요', '프론트엔드 개발자', '정x영입니다'].map(text => {
                            return(
                                <div className="eventBox">
                                    <li className="text">{text}</li>
                                    <div className="textBackColor"/>
                                </div>  
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}