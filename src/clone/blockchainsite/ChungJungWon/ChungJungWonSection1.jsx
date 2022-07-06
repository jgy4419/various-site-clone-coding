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
            '정원아,<br/> 오늘도 부탁해',
            '만족을 <br/> 요리하다',
            '안주야를 만나는 순간, <br/>모든 것이 즐겂다',
            '맛있는<br/> 발효숙성'
        ],
    }

    useEffect(() => {
        scrollEvent(20, 3);
    }, []);

    function scrollEvent(scrollValue, index){
        let screenHeight = document.documentElement.scrollHeight;
        let backImage = document.querySelectorAll('.bar');
        // e는 20부터..
        // for(let i = e; i > 12; i--){
        document.addEventListener('scroll', async () => {
            let currentScrollValue = document.documentElement.scrollTop;
            if(currentScrollValue > screenHeight / 25 && currentScrollValue < screenHeight / 14){
                backImage[0].style.backgroundSize = '100%';
                backImage[1].style.backgroundSize = '100%';
            }
            else if(currentScrollValue > screenHeight / 14){
                backImage[2].style.backgroundSize = '100%';
                backImage[3].style.backgroundSize = '100%';
            }else{
                for(let i = 0; i < backImage.length; i++){
                    backImage[i].style.backgroundSize = '130%';
                }
            }
        })
    }

    function Bar(){
        let barArray = [];
        for(let i = 0; i < 4; i++){
            barArray.push(
                <div className="bar" style={{
                    backgroundImage: `url(${barItem.backColor[i]})`
                }}><p className="itemText" dangerouslySetInnerHTML={{__html: barItem.mainText[i]}}/></div>
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
