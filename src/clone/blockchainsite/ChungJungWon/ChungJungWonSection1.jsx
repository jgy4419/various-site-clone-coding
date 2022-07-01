import React, {useEffect} from 'react';
import './ChungJungWonSection1.scss';

export default function Section1(){
    let barItem = {
        backColor: [
            'https://www.chungjungone.com/wp-content/uploads/2022/03/chungjungone-bg1-min.png',
            'https://www.chungjungone.com/wp-content/uploads/2022/03/chungjungone-bg2-min.png',
            'https://www.chungjungone.com/wp-content/uploads/2022/03/chungjungone-bg3-min.png',
            'https://www.chungjungone.com/wp-content/uploads/2022/03/chungjungone-bg4-min.png'
        ],
        mainText: [
            '정원아, 오늘도 부탁해',
            '만족을 요리하다',
            '안주야를 만나는 순간, 모든 것이 즐겂다',
            '맛있는 발효숙성'
        ],
    }

    useEffect(() => {
        scrollEvent();
    }, []);

    function scrollEvent(){
        let screenHeight = document.documentElement.scrollHeight;
        let backImage = document.querySelectorAll('.bar');
        document.addEventListener('scroll', () => {
            let currentScrollValue = document.documentElement.scrollTop;
            // for(let i = 20; i > 12; i-=2){
                for(let j = 0; j < 4; j++){
                    let i = 20;
                    // if(currentScrollValue > screenHeight / [i]){
                    if(currentScrollValue > screenHeight / [i]){
                        backImage[j].style.backgroundSize = '100%';
                    }else{
                        backImage[j].style.backgroundSize = '130%';
                    }
                    i--;
                }
            // }

            // if(currentScrollValue > screenHeight / 20){
            //     backImage[0].style.backgroundSize = '100%';
            // }else if(currentScrollValue < screenHeight / 20 && currentScrollValue > screenHeight / 19){
            //     backImage[1].style.backgroundSize = '100%';
            // }
            // else{
            //     for(let i = 0; i < backImage.length; i++){
            //         backImage[i].style.backgroundSize = '130%';
            //     }
            // }
        })
    }

    function Bar(){
        let barArray = [];
        for(let i = 0; i < 4; i++){
            barArray.push(
                <div className="bar" style={{
                    backgroundImage: `url(${barItem.backColor[i]})`
                }}>ㅋㅋ</div>
            )
        }
        return barArray;
    }
    return(
        <div className="chungJungWonSection1Contain">   
            <div className="inner">
                <ul className="bars">
                    <Bar/>
                </ul>
            </div>
        </div>
    )
}
