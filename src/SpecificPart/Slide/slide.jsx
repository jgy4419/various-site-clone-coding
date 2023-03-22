import React from 'react';
import Slide1 from './slide1';
import Slide2 from './slide2';
import ImageCarousel from './imgCarousel';
import ChangeCarousel from './ChangeCarousel';
export default function Slide(){
    const defaultStyle = {
        width: '1100px',
        margin: 'auto',
        position: 'absolute',
        left: 0
    }
    return(
        <div style={defaultStyle}>
            <Slide1 />
            <Slide2 />
            <ImageCarousel/>
            <ChangeCarousel />
        </div>
    )
}
