import React, { useEffect, useState } from 'react';
import './card1.scss'

export default function Card1(){
    return(
        <div className="card1">
            <div className="mainContain">
                <p className="title">Paris</p>
                <span className="content">Paris, the capital of France, it a major Europan city and a world
                center for art, fashion gastronomy and outure. Its....</span>
                <button className="moreBtn">See more!</button>
            </div>
            <div className="sideContain">
                {
                    ['🚨', '🚇', '😣', '👍'].map((e) => {
                        return(
                            <button className="sideBtn">{e}</button>
                        )
                    })
                }
            </div>
        </div>
    )
}