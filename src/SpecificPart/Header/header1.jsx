import React, { useState, useEffect } from 'react';
import './header1.scss';

const Header1 = () => {
    const item_li = ['Item1', 'Item2', 'Item3', 'Item4'];
    const item_li_1 = ['Item1-1', 'Item1-2', 'Item1-3', 'Item1-4'];
    const item_li_2 = ['Item2-1', 'Item2-2', 'Item2-3', 'Item2-4'];
    const item_li_3 = ['Item3-1', 'Item3-2', 'Item3-3', 'Item3-4'];
    const item_li_4 = ['Item4-1', 'Item4-2', 'Item4-3', 'Item4-4'];

    
    function over() {
        document.querySelector('.hoverItemMenus').style.opacity = 1;
    }
    function out() {
        document.querySelector('.hoverItemMenus').style.opacity = 0;
    }

    return (
        <div className="header1Contain">
            <div className="inner">
                <ul className="items">
                    <li className="logo">Logo</li>
                    {
                        item_li.map((item, index) => {
                            return (
                                <li onMouseOver={over} onMouseOut={out} className="item" key={index}>{item}</li>
                            )
                        })
                    }
                </ul>
                {/* 반복문 사용해서 최적화 시켜보기 */}
                <div className="hoverItemMenus">
                    <ul className="items-list" onMouseOver={over} onMouseOut={out}>
                        {
                            item_li_1.map((item, index) => {
                                return (
                                    <li className="item-list" key={index}>{ item }</li>
                                )
                            })
                        }
                    </ul>
                    <hr />
                    <ul className="items-list" onMouseOver={over} onMouseOut={out}>
                        {
                            item_li_2.map((item, index) => {
                                return (
                                    <li className="item-list" key={index}>{ item }</li>
                                )
                            })
                        }
                    </ul>
                    <hr />
                    <ul className="items-list" onMouseOver={over} onMouseOut={out}>
                        {
                            item_li_3.map((item, index) => {
                                return (
                                    <li className="item-list" key={index}>{ item }</li>
                                )
                            })
                        }
                    </ul>
                    <hr />
                    <ul className="items-list" onMouseOver={over} onMouseOut={out}>
                        {
                            item_li_4.map((item, index) => {
                                return (
                                    <li className="item-list" key={index}>{ item }</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header1;