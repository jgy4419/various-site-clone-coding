import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Second from './Home2';

const Home = () => {
  const [str, setStr] = useState('zzzㅋㅋㅋ');
  const item = { 
    name: 'test',
    age: 245
  }
  const memoItem = useMemo(() => item, []);
  const [num, setNum] = useState(1);
  const test = () => {
    setNum(prev => prev + 1);
  }
  const callbackData = useCallback(test, []);
   return (
    <>
      <Components test={test}>
        <Second str={memoItem}/>
      </Components>
    </>
  );
};

export default Home;


function Components ({children, test}){
      console.log(children.props);
  return (
    <>
      <button onClick={test}>ㅋㅋ</button>
      {children}
    </>
  )
}

// function Second({str}) {
//   console.log(str);
//   return (
//     <>
//       <h1>??</h1>
//     </>
//   )
// }
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

