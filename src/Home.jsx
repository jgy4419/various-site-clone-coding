import React, { useEffect, useState, useCallback, useMemo } from 'react';
import SecondChild from './SecondChile'
// parent라고 지정.
export default function Home(){
    return(
        <>
            <FirstChild>
                <Consoler value="children 값 생성!"/>
            </FirstChild>
        </>
    )
}

function FirstChild({ children }){
    console.log('FirstChild 렌더링 발생.')
    console.log(children);
    return(<>
        <button>ss</button>
        {children.props.value}
    </>)
}

function Consoler({children}){
    return(
        <>
            <p>{children}</p>
        </>
    )
}