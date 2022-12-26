import React from 'react';
import Card1 from './card1';
import Card2 from './card2';
import Card3 from './card3';
import Card4 from './card4';

export default function Card(){
    const defaultStyle = {
        width: '100vw',
        margin: 'auto'
    }
    return(
        <div style={defaultStyle} className="contain">
            <Card1/>
            <Card2 />
            <Card3/>
            <div style={{margin: '100px'}}>
                <Card4/>
            </div>
        </div>
    )
}