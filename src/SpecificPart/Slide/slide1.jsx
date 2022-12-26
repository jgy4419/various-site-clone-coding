import React from 'react';
import './slide1.scss';
export default function Slide1(){
    return(
        <div className="slide1Contain">
            <div className="boxs">
                {
                    /*
                        같은 박스를 2개씩 지정하는 이유 
                            - 슬라이드로 박스 4개가 끝날 때 쯤 이어서 오는 박스 4개가 화면에 맞춰서 들어오는데,
                            - 이어서 오는 박스 4개가 화면에 딱 맞을 때 css의 animation(keyframes)이 초기화 되면서 다시 슬라이드(자연스럽게 이어짐)
                    */
                    ['blue', 'red', 'yellow', 'green', 'blue', 'red', 'yellow', 'green'].map((e, index) => {
                        return(
                            <div key={index} className='box' style={{backgroundColor: e}}>{index}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}