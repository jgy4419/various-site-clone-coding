import React, {useState} from 'react';
import './css/Section2.scss'

function Section2(){
    return(
        <div className="section2">
            <div className="inner">
                <div className="text">
                    <p className="mainText">TV로 즐기세요.</p>
                    <br/>
                    <p className="innerText">
                        스마트 TV, PlayStation, Xbox, Chromecast, Apple TV,
                        블루레이 플레이어 등 다양한 <br/>디바이스에서 시청하세요.
                    </p>
                </div>
                <div className="video">
                    <video className="playVideo" autoPlay playsInline muted loop>
                        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"></source>
                    </video>
                    <img className="videoImage" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="img"/>
                </div>
            </div>
        </div>
    )
}

export default Section2;