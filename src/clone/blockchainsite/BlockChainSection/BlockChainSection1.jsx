import React, { useState, useEffect } from 'react';
import '../BlockChainSection/BlockChainSection1.scss';

export default function BlockChainSection1(){
    useEffect(() => {
        scrollEvent();
    }, [])

    function scrollEvent(){
        let screenHeight = document.documentElement.scrollHeight;
        let backImage = document.querySelector('.backImage');
        let textBox = document.querySelector('.textBox');
        let mainText = document.querySelectorAll('.mainText');
        // let mainText = document.querySelectorAll('.mainText');
        // 점점흐려지게 하는 기술 https://velog.io/@jy777hi/%ED%99%94%EB%A9%B4%EC%9D%98-%ED%99%88-%EB%B6%80%EB%B6%84-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EC%8B%9C-%EC%BB%A8%ED%85%90%EC%B8%A0-%EC%84%9C%EC%84%9C%ED%9E%88-%ED%9D%90%EB%A6%AC%EA%B2%8C-%EB%A7%8C%EB%93%A4%EA%B8%B0
        document.addEventListener('scroll', () => {
            let currentScrollValue = document.documentElement.scrollTop;
            let textMove = currentScrollValue / 5;
            let decimal = (window.scrollY / screenHeight) - 0 + 0.1;
            backImage.style.opacity = decimal;
            mainText[0].style.transform = `translateX(${textMove}px)`;
            mainText[2].style.transform = `translateX(-${textMove}px)`;
            if(currentScrollValue > screenHeight / 2.2) {
                decimal = 1 - window.scrollY / screenHeight;
                backImage.style.opacity = decimal;
                textBox.style.opacity = decimal;
            }
        })
    }

    return(
        <div className="contain">
            <div className="inner">
                    <section className="section">
                    <ul className="textBox">
                        {
                            ['기록하고', '증명하고', '성장하기'].map(e => {
                                return(
                                    <p className="mainText">{e}</p>
                                )
                            })
                        }
                    </ul>
                <div className="backImage"/>
                </section>
            </div>
            <div className="image2"/>
            <div className="image3"/>
            {/* <div className="controlBox"> */}
            {/* </div> */}
        </div>
    )
}