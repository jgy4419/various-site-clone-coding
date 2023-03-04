import React, {useState, useCallback, useEffect} from 'react';

const Button = props => {
    const [data, setData] = useState([]);
    const getData = () => { 
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setData(data)
        })
    };

    useEffect(() => {
        console.log("BUTTON RUNNING!");
        getData()
    }, []);
  return (
    <>
            <button onClick={props.onClick}>RESET!</button>;
    {
        data.map(post => (
            <div key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        ))
    }
    </>
  )
};

export default Button

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
