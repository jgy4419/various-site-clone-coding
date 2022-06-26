import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './css/Section1.scss'

function Section1(){
    let [inputValue, inputValueChange] = useState('');
    return(
        <div className = "contauner">
            <div className="inner">
                <p className="text1">영화와 시리즈를 무제한으로.</p>
                <p className="text2">다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</p>
                <br/>
                <span className="text3">시청할 준비가 되셨나요? 멤버십을 등록하거나<br/>
                재시작하려면 이메일 주소를 입력하세요.</span>
                <br/><br/>
                <form action = "#">
                    <input onChange={(e) => {(inputValueChange(e.target.value))}} placeholder = "이메일 주소"/>                
                </form>
                <br/>
                <p>입력한 이메일 : {inputValue}</p>
                <br/>
                <Link to="/next/abc"><button className="startButton">시작하기 ></button></Link>
            </div>
        </div>
    )
}

export default Section1;