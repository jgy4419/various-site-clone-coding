import React, { useState } from 'react';

const useInput = () => {
    console.log('?');
    const [value, setValue] = useState('');

    const isValid = value => value.length < 10; // 유효성 검사

    const onChange = (e) => {
        const { value } = e.target;
        let willUpdate = isValid(value);
        console.log(willUpdate);
        if (willUpdate) {
            setValue(value);
        }
    };
    return { value, onChange };
}

const Home = () => {
    const { value, onChange } = useInput();
    const onClick = () => {
        alert('클릭!');
    }
    return (
        <div className="box">
            <input type="text" placeholder="Name" value={value} onChange={onChange} />
            <button onClick={onClick}>버튼버튼</button>
        </div>
    );
};

export default Home;

