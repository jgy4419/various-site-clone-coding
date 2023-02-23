import React, { useState } from 'react';
import './KeyWord.scss'

const KeyWord = () => {
    const [keyWord, setKeyWord] = useState([]);
    const [inputContent, setInputContent] = useState('');
    const keyWordPush = () => {
        if (keyWord.includes(inputContent) || inputContent === '') {
            alert(`이미 ${inputContent} 가 선택되어있습니다.`)
            return;
        }
        setKeyWord([...keyWord, inputContent]);
        setInputContent('');
    }
    const deleteKeyWord = (index) => {
        setKeyWord(keyWord.filter((item, i) => item !== keyWord[index]));
        setInputContent('');
    }
    return (
        <>
            <div className="key_word_contain">
                <div className="keyWordInputContain">
                    <input
                        type='text'
                        value={inputContent}
                        onChange={(event) => {
                            setInputContent(event.target.value);
                        }}
                        placeholder='키워드를 입력해주세요' />
                    <button onClick={() => {
                        keyWordPush()
                    }} className="add">추가</button>
                </div>
                <ul className="my_keyWords">
                    {
                        keyWord.map((item, index) => (
                            <li className="keyWord" key={index}>
                                <p
                                    onClick={() => { deleteKeyWord(index) }}
                                    className="close">X</p>
                                {item}
                            </li>
                        ))
                    }
                </ul>
            </div>
            
        </>
    );
};

export default KeyWord;