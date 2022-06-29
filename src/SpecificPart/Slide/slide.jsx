import React from 'react';
import Slide1 from './slide1';
export default function Slide(){
    const defaultStyle = {
        width: '1100px',
        margin: 'auto'
    }
    return(
        <div style={defaultStyle}>
            <Slide1/>
        </div>
    )
}