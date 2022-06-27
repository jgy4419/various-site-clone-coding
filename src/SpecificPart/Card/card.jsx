import React from 'react';
import { Route } from 'react-router-dom';
import Card1 from './card1';

export default function Card(){
    const defaultStyle = {
        width: '1100px',
        margin: 'auto'
    }
    return(
        <div style={defaultStyle} className="contain">
            <Card1/>
        </div>
    )
}