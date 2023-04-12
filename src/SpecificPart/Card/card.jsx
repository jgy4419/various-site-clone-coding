import React from 'react';
import Card1 from './card1';
import Card2 from './card2';
import Card3 from './card3';
import Card4 from './card4';
import Card5 from './card5';
import Card6 from './card6';
import Card7 from './card7';
import Card8 from './card8';
import Card9 from './card9';
import Card10 from './card10';
import Card11 from './card11';

import ResponsiveCard from './ResponsiveCard';
import DarkModeCard from './DarkModeCard';

export default function Card() {

    const defaultStyle = {
        width: '100vw',
        margin: 'auto'
    }

    return(
        <>
            <div className="card_main_contain">
                <Card2 />
                <div style={defaultStyle} className="contain">
                    <Card1/>
                    <Card3/>
                    <div style={{margin: '100px'}}>
                        <Card4/>
                    </div>
                    <Card5 />
                    <Card6 />
                    <Card7 />
                    <ResponsiveCard />
                    <Card8/>
                    <Card9/>
                    <Card10/>
                    {/* <DarkModeCard/> */}
                    <Card11/>
                </div>
            </div>
        </>
    )
}