import React, {useEffect, useState} from 'react';
import './Grid1.scss'


/* 
    https://css-tricks.com/almanac/properties/g/grid-auto-flow/ Demo 참고!!
*/

const Grid1 = () => {
    const random_li_box = [
        '내용1', '내용2', '내용3', '내용4', '내용5',
        '내용6', '내용7', '내용8', '내용9', '내용10',
        '내용11', '내용12', '내용13', '내용14', '내용15',
        '내용16', '내용17', '내용18', '내용19', '내용20'
    ]
    return (
        <div className="grid1Contain">
            <div className="inner">
                <ul className="items">
                    {
                        random_li_box.map((item, index) => {
                            return (
                                <li className="item" key={index}>{ item }</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
   );   
};

export default Grid1;