import React from 'react';
import Button1 from './button1';

export default function Button(){
    const defaultStyle = {
        width: '1100px',
        margin: 'auto'
    }
    return(
        <div style={defaultStyle}>
            <Button1/>
        </div>
    )
}