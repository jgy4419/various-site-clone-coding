import React from 'react';
import Button1 from './button1';
import Button2 from './button2';
import Button3 from './button3';

export default function Button(){
    const defaultStyle = {
        width: '1100px',
        margin: 'auto'
    }
    return(
        <div style={defaultStyle}>
            <Button1 />
            <Button2 />
            <Button3 />
        </div>
    )
}