import React from 'react';
import CardMain from './cardMain';
import Card1 from './card1';
import Card2 from './card2';
import Card3 from './card3';
import Card4 from './card4';
import Card5 from './card5';
import Card6 from './card6';
import Card7 from './card7';

export default function Card() {

    const defaultStyle = {
        width: '100vw',
        margin: 'auto'
    }

    return(
        <>
            <div className="card_main_contain">
                <CardMain/>
                <Card2 />
                <div style={defaultStyle} className="contain">
                    <Card1/>
                    <Card3/>
                    <div style={{margin: '100px'}}>
                        <Card4/>
                    </div>
                    <Card5 />
                    <Card6 />
                    <Card7/>
                </div>
            </div>
        </>
    )
}