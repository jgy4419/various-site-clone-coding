import React, {useRef, useEffect, useState} from 'react';
import './cardMain.scss';

const CardMain = () => {
    // 여기 다 에러
    const background = useRef(null);
    const [scrollState, setScrollState] = useState(false);
    const [timeState, setTimeState] = useState(false);

    const scrollHandler = () => {
        // 스크롤이 50px 이상일 때
        if (window.scrollY >= 50) {
            // 스크롤 이벤트 감지 -> 스크롤 변수(scrollState) 상태 변경
            setScrollState(true);
            window.removeEventListener('scroll', false);
        }
    }

    useEffect(() => {
        // 스크롤 이벤트 감지
        window.addEventListener('scroll', scrollHandler);
        window.scrollTo(0,0); // 스크롤 최상단 유지
        // 너가 정한 타이머
        setTimeout(() => {
            // 시간 지나면 상태(timeState)가 변경
            setTimeState(true);
        }, 2000);
        // 타이머 시간이 다 되거나, 스크롤 이 발생하면 화면 이동
        if (scrollState || timeState) {
            background.current.classList.add('change_background');
            // 스크롤 감지 멈춤.
            // window.removeEventListener('scroll');
        }
    }, [scrollState, timeState]);

    return (
        <div ref={ background } className='main_contain'>
            <h1 className="text">Text~~~</h1>
        </div>
    );
};

export default CardMain;