import React, { useState, useEffect, useCallback } from 'react';
import useGetDataBase from './useGetData';
import './InfiniteScroll.scss'

const InfiniteScroller = () => {
    // 불러올 데이터의 개수. 요청 때 마다 + 1 씩 증가해서 실제 함수에 불러올 데이터 * count 부분 데이터까지 불러와준다.
    const [count, setCount] = useState(1);
    // 새로운 게시글들을 불러오는 동안 적용될 로딩 상태를 나타내는 변수
    const [loadingState, setLoadingState] = useState(false);
    // custom hook 불러오기.
    const { data, updateData } = useGetDataBase(count);
    // 스크롤 시 동작할 함수.
    const handleScroll = useCallback(() => {
        // 스크롤이 사이트 아래에 도달했는지 확인하는 함수.
        const { innerHeight } = window;
        const { scrollHeight } = document.body;
        const { scrollTop } = document.documentElement;
        // 아래에 도달했으면 updateHandler 실행
        if (Math.round(scrollTop + innerHeight) >= scrollHeight) {
            updateHandler();
        }
    }, [data, count]);

    // customHook 호출시켜주고, count 개수 1 증가하면서 데이터 추가로 불러와주기.
    const updateHandler = async () => {
        // 너부 빠르게 로딩(서버에 요청)이 되면 서버에 부하가 생길 수도 있으므로 setTimeout으로 딜레이 넣기.
        setLoadingState(true);
        await setTimeout(() => {
            setCount(prev => prev += 1);
            updateData();
        }, 500);
        setLoadingState(false);
    }

    // useEffect로 스크롤 감지
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, true);
        // 컴포넌트가 unmount 되면 스크롤 기능 종료.
        return () => {
            window.removeEventListener('scroll', handleScroll, true);
        }
    }, [handleScroll]);
    return (
        <div className="infiniteScroll_container">
            <ul className="datas">
            {
                data.map((item, index) => (
                    <li className="data" key={index}>{item.title}</li>
                ))   
            }
            </ul>
            {
                loadingState === true
                    ? <h1> 로딩중....!</h1>
                    : null
            }
        </div>
    );
};

export default InfiniteScroller;