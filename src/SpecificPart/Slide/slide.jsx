import React from 'react';
import Slide1 from './slide1';
import Slide2 from './slide2';
import ImageCarousel from './imgCarousel';
export default function Slide(){
    const defaultStyle = {
        width: '1100px',
        margin: 'auto'
    }
    return(
        <div style={defaultStyle}>
            <Slide1 />
            <Slide2 />
            <ImageCarousel/>
        </div>
    )
}
