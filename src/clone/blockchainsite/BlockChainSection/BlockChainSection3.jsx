import React, { useEffect, useState } from 'react';
import '../BlockChainSection/BlockChainSection3.scss';


export default function BlockChainSection3(){
    let [icon, setIcon] = useState([
        'https://www.enterpriseblockchain.io/assets/img/challenge/possibility-system.png',
        'https://www.enterpriseblockchain.io/assets/img/challenge/possibility-prove.png',
        'https://www.enterpriseblockchain.io/assets/img/challenge/possibility-nft.png',
        'https://www.enterpriseblockchain.io/assets/img/challenge/possibility-global.png'
    ]);
    let [iconTitle, setIconTitle] = useState([
        `기축데이터, 금융, 사회 전환 시스템 부재`,
        `개인의 소득 증빙, 재능 필요`,
        `NFT 통해 재능 자산 소유권 증명`,
        `커리어성장, 금융 혜택으로 연결`
    ])


    useEffect(() =>{
        section3ScrollEvent();
    }, [])

    function section3ScrollEvent(){
        let screenHeight = document.documentElement.scrollHeight;
        let blockChainSection3Contain = document.querySelector('.blockChainSection3Contain');
        document.addEventListener('scroll', () => {
            let currentScrollValue = document.documentElement.scrollTop;
            let rightScroll = currentScrollValue / 5;
            let inner = document.querySelector('.section3Inner');
            // console.log('currentScrollValue' + currentScrollValue);
            // console.log(rightScroll);
            inner.style.transform = `translateX(-${rightScroll - 1000}px)`;
            if(currentScrollValue > screenHeight / 2){
                blockChainSection3Contain.style.backgroundColor = 'black';
            }else{
                blockChainSection3Contain.style.backgroundColor = 'white';
            }
        })
    }

    function ItemUI(){
        let array = [];
        for(let i = 0; i < icon.length; i++){
            const iconStyle = {
                backgroundImage: `url(${icon[i]})`
            }
            array.push(
                <div className="item">
                    <div className="icon" style={iconStyle}/>
                    <p className="title">{iconTitle[i]}</p>
                </div>
            )
        }
        return array;
    }
    return(
        <>
            <div className="blockChainSection3Contain">
                <div className="section3Inner">
                    <p className="mainText">불가능을 <br/> NFT cv로 <br/> 가능하게.</p>
                    <div className="itemBox">
                        {ItemUI()}
                    </div>
                </div>
            </div>
        </>
    )
}