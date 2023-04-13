import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import SearchInputControl from './SearchInputControl';

const InputControls = () => {
    const [inputValue, setInputValue] = useState('');
    const [warningState, setWarningState] = useState(true);
    useEffect(() => {
        if(inputValue.length >= 8) setWarningState(false);
        else setWarningState(true)
    }, [inputValue]);
    return (
        <>
            <SearchInputControl/>
            <InputContain>
            <Input onChange={(e) => setInputValue(e.currentTarget.value)} type="text" placeholder='아이디를 입력해주세요.'/> 
                <WarningMessage warningState={warningState}>
                    8자 이상 입력해주세요.
                </WarningMessage>
            </InputContain>
        </>
    );
};
const InputContain = styled.div`
    position: relative;
    width: 50vw;
    height: 30vh;
`
const Input = styled.input`
    // position: absolute;
    z-index: 10px;
    width: 300px;
    height: 40px;
    padding: 20px;
    border-radius: 10px;
    border: 0;
`
const WarningMessage = styled.div`
    position: absolute;
    opacity: ${props => props.warningState ? '1' : '0'};
    transition: .3s;
    transform-origin: ${props => props.warningState ? 'translateY(0px)' : 'translateY(-20px)'};
    width: 300px;
    height: 30px;
    color: #fff;
    background-color: red;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
`

export default InputControls;