import React, { useState, useEffect, useCallback } from 'react';
import useGetDataBase from './useGetData';
import './InfiniteScroll.scss'

const InfiniteScroller = () => {
    const [count, setCount] = useState(1);
    const [loadingState, setLoadingState] = useState(false);
    const { data, updateData } = useGetDataBase(count);
    const handleScroll = useCallback(() => {
        const { innerHeight } = window;
        const { scrollHeight } = document.body;
        const { scrollTop } = document.documentElement;
        if (Math.round(scrollTop + innerHeight) >= scrollHeight) {
            updataHandler();
        }
    }, [data, count]);
    const updataHandler = async () => {
        // 너부 빠르게 로딩이 되면 서버에 부하가 생길 수도 있으므로 setTimeout으로 딜레이 넣기.
        setLoadingState(true);
        await setTimeout(() => {
            setCount(prev => prev += 1);
            updateData();
        }, 2000);
        setLoadingState(false);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, true);
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