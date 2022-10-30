import React, { useState, useEffect, useCallback, useMemo } from 'react';

export default function Text() {
    const item = {
        name: 'Thinkpad',
        price: '1,000,000'
    }
    const memoizedItem = useMemo(() => item, []);   
    const [valueForFirstChild, setValueForFirstChild] = useState(null);
    const handleClick = useCallback(() => { }, []);
    useEffect(() => {
        setTimeout(() => {
            setValueForFirstChild('changeValue');
        })
    }, []);
    return (
        <>
            <FirstChild value={valueForFirstChild} />
            <SecondChild onClick={handleClick} />
        </>
    )
}

function FirstChild({ value }) {
    console.log('FirstChild 리렌더링 발생');
    return <>{ value }</>
}

function SecondChild({ onClick }) {
    console.log('secondChild 리렌더링 발생');
    return (
        <div onClick={ onClick }>
            {Array.from({ length: 1000 }).map((_, idx) => {
                return (
                    <GrandChild key={idx + 1} order={ idx }/>
                )
            })}
        </div>
    )
}

function GrandChild() {
    return (
        <>
            {/* gg */}
        </>
    )
}