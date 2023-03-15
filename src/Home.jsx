import { useSelector, useDispatch } from 'react-redux';
// action 실행함수 가져오기
import { addAsync, minusData } from './redux/modules/counter';
import { getPost } from './redux/modules/post';

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  const getPostNext = () => {
    dispatch(addAsync());
    dispatch(getPost(state.counter.num));
  }

  const getPostPrev = () => {
    dispatch(minusData());
    dispatch(getPost(state.counter.num));
  }

  return (
    <div>
      <p>{state.post.data.title}</p>
      <p>{state.post.data.body}</p>
      <p>{state.counter.num}</p>
      <button onClick={() => dispatch(getPostNext())}>+</button>
      <button onClick={() => dispatch(getPostPrev())}>-</button>
    </div>
  );
};

export default Home;

// import React, { useState } from 'react';

// const useInput = () => {
//     console.log('?');
//     const [value, setValue] = useState('');

//     const isValid = value => value.countgth < 10; // 유효성 검사

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

