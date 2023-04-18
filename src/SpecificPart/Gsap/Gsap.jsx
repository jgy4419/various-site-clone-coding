import gsap from "gsap";
import React, { useEffect } from 'react';
import './Gsap.scss';

const Gsap = () => {
    // gsap3 
    const gsap3Action = () => {
        gsap.to('.gsap3_box', {duration: 3, x: 200, opacity: 0.2, ease: 'steps(10)'});
        gsap.to('.gsap3_box', {duration: 3, y: 200, opacirt: 1, delay: 3});
        gsap.to('.gsap3_box', {duration: 3, x: 0, width: 200, backgroundColor: 'red', delay: 6});
        gsap.to('.gsap3_box', {duration: 3, y: 0, height: 200, delay: 9});
    }
    // gsap2
    let tween;
    useEffect(() => {
        tween = gsap.to('.animation_box', {
            duration: 4,
            x: 500,
            rotation: 360,
            ease: "none",
            paused: true
        })
        // Target 요소 속성에서 지정한 속성까지 애니메이션이 된다.
        gsap.to('.green', {rotation: 360, x: 100, duration: 1});
        // to와 정반대로 시작 값을 정하고 원래대로 되돌아오는 애니메이션이 실행된다.
        gsap.from('.purple', {rotation: -50, x: -100, duration: 1})
        // from 속성이 시작 값으로 세팅되고, to 속성이 종료 값으로 세팅되어 애니메이션 효과가 적용된다.
        gsap.fromTo('.blue', {x: 500, opacity: 0}, {rotation: 360, x: 100, duration: 1, opacity: 1})
    }, [tween]);
    return (
        <div className='gsap_container'>
            {/* <GsapSpinning/> */}
            <div className="gsap_1">
                <h1>GSAP 기본 사용 법</h1>
                <div className="gsap1_box green"></div>
                <div className="gsap1_box purple"></div>
                <div className="gsap1_box blue"></div>
            </div>
            {/* 특정한 요소의 애니메이션을 멈추거나 재실행하는 등의 컨트롤이 가능하다. */}
            <div className="gsap_2">
                <h1>요소 애니메이션 제어하기</h1>
                <div className="gsap2_box animation_box"></div>
                <div className="buttons">
                    {/* gsap 실행 */}
                    <button onClick={()=>{tween.play()}}>play</button>
                    {/* 일시정지 */}
                    <button onClick={()=>{tween.pause()}}>pause</button>
                    {/* 움직였던 방향으로 이어서 동작 */}
                    <button onClick={()=>{tween.resume()}}>resume</button>
                    {/* 반대로 동작 */}
                    <button onClick={()=>{tween.reverse()}}>reverse</button>
                    {/* gsap 처음부터 다시 실행 */}
                    <button onClick={()=>{tween.restart()}}>restart</button>
                </div>
            </div>
            <div className="gsap_3">
                <h1>Timeline</h1>
                <div className="gsap3_box"/>
                <button onClick={() => {gsap3Action()}}>gsap3 action</button>
            </div>
        </div>
    );
};

export default Gsap;