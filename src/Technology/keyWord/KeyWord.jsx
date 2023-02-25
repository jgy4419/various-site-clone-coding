import React, { useState } from 'react';
import './KeyWord.scss'

const KeyWord = () => {
    const [keyWord, setKeyWord] = useState([]);
    const [inputContent, setInputContent] = useState('');
    // 키워드가 추가됐을 때 실행되는 함수
    const keyWordPush = () => {
        // 키워드가 이미 있거나 비어있으면 alert창 띄운 후 반환.
        if (keyWord.includes(inputContent) || inputContent === '') {
            alert(`이미 ${inputContent} 가 선택되어있습니다.`)
            return;
        }
        // 키워드가 없다면 추가시켜주고 input창 비워주기.
        setKeyWord([...keyWord, inputContent]);
        setInputContent('');
    }
    // 키원드 hover 시 X 표시 누르면 키워드 삭제 시켜주기.
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