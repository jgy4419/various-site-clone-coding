import React, { useEffect } from 'react';
import gsap from "gsap";
/* 
    ScrollTrigger는 스크롤을 해서 해당 요소가 보일 때 애니메이션 효과가 나타나도록 하는 것이 목적이다.
*/
import { ScrollTrigger } from "gsap/all";
import Gsap from './Gsap';
import './GsapSpinning.scss'

const GsapSpinning = () => {
    const tl = gsap.timeline();
    useEffect(() => {
        // 이렇게 ScrollTrigger를 불러온다.
        // 화면에 애니메이션 효과가 시작된다.
        gsap.registerPlugin(ScrollTrigger);
        // gsap.defaults({ease: "power1", duration: 3});

        tl.from(".section03", {xPercent: -100})
        .from(".section04", {xPercent: 100})
        .from(".section05", {yPercent: 400});

        ScrollTrigger.create({
            animation: tl,
            trigger: "#container",
            start: "top top", 
            end: "+=4000",
            // pin은 핀으로 화면에 고정하는 기능이라 생각하면 좋다. (원페이지 스크롤에 쓰인다.)
            // pin: true 또는 pion: "요소의 class/id명" 이다.
            pin: true,
            /*
                scrub는 스크롤이 요소 이전으로 돌아가면 애니메이션도 같이 되돌아가는 기능.
                - 애니메이션을 재사용 할 수 있는 기능으로 일회성 애니메이션 효과가 아닌 곳에 사용이 가능.
                - true를 입력해도 되지만, 수치를 입력하는 것이 더 부드럽다.
            */
            scrub: true,
            anticipatePin: 1
        });
    }, []);
    return (
        <div className='gsap_spinning_contain'>
            <div className="section01"><p>TEXT1</p></div>
            <div id="container">
                <section className="section02"><p>TEXT2</p></section>
                <section className="section03"><p>TEXT3</p></section>
                <section className="section04"><p>TEXT4</p></section>
                <section className="section05">
                    <Gsap/>
                </section>
            </div>
        </div>
    );
};

export default GsapSpinning;