import React from 'react';

// React.memo를 적용하면 해당 컴포넌트가 리렌더링 과정에 진입하기 전 props 값인 onClick에 대해
// 이전 값과 현재 값이 다른지 비교한다. 서로 같은 값이면 SecondChild 컴포넌트의 재렌더링은 일어나지 않는다.
function SecondChild({ item }){
    console.log('SecondChild 리렌더링 발생');
    return  (
        <div>
            {/* 1000개의 grandChild 컴포넌트들을 자식으로 가지고 있음. */}
            {Array.from({length: 1000}).map((_, idx) => {
                <GrandChild key={idx + 1} order={idx}/>
            })}
        </div>
    )
}
export default React.memo(SecondChild);

function GrandChild(){
    return(
        <>
            gg
        </>
    )
}


// import React, { useEffect, useState, useCallback } from 'react';

// // 변경된 state 전달 x. 그런데 리렌더링 발생.
// function SecondChild({ item }) {
//     return  (
//         <div>
//             {/* 1000개의 grandChild 컴포넌트들을 자식으로 가지고 있음. */}
//             {Array.from({length: 1000}).map((_, idx) => {
//                 <GrandChild key={idx + 1} order={idx}/>
//             })}
//             </div>
//     )
// }

// // props 값인 onClick에 대해서 이전 값과 현재 값이 다른지 비교.
// export default React.memo(SecondChild);

// function GrandChild(){
//     return(
//         <>
//             <p>GrandChild</p>
//         </>
//     )
// }
