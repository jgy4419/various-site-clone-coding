// 부모 컴포넌트
import Button from './SecondChild';
import { useEffect, useState, useCallback, useMemo } from 'react';
import './Home.scss'
// import './App.css';

const Home = () => {
    const [ex, setEx] = useState(0);
  const [why, setWhy] = useState(0);

  function 로직이복잡한함수(){
    // ex 변수가 변경될 때만 fetch가 동작한다.
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => {
          console.log(data);
          return data;
        })
  }

  const apiGet = useCallback(() => {로직이복잡한함수()}, [why]);

  console.log('parent re-render')

  return (
      <div>
        <button onClick={() => setEx((curr) => (curr + 1))}>X</button>
        <button onClick={() => setWhy((curr2) => (curr2 + 1))}>Y</button>
        <Profile onSave={apiGet} ex={ex}/>
      </div>
  );
};

function Profile({onSave, ex}) {

  useEffect(() => {
    onSave();
  }, [onSave]);

  return(
      <div>
            <p>profile {ex}</p>
      </div>
  )

}

export default Home;

// import React, { useState } from 'react';

// const useInput = () => {
//     console.log('?');
//     const [value, setValue] = useState('');

//     const isValid = value => value.length < 10; // 유효성 검사

//     const onChange = (e) => {
//         const { value } = e.target;
//         let willUpdate = isValid(value);
//         console.log(willUpdate);
//         if (willUpdate) {
//             setValue(value);
//         }
//     };
//     return { value, onChange };
// }

// const Home = () => {
//     const { value, onChange } = useInput();
//     const onClick = () => {
//         alert('클릭!');
//     }
//     return (
//         <div className="box">
//             <input type="text" placeholder="Name" value={value} onChange={onChange} />
//             <button onClick={onClick}>버튼버튼</button>
//         </div>
//     );
// };

// export default Home;

