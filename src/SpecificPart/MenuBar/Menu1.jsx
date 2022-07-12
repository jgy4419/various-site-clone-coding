import React from 'react';
import './Menu1.scss';
export default function Menu1(){
    function itemOpen(){
        document.querySelector('.nav2').classList.add('event');
    }
    function itemClose(){
        document.querySelector('.nav2').classList.remove('event');
    }
    return(
        <>
            {/* 3단 메뉴바 만들어보기 */}
            <div className="menu1Contain">
                <p className="close">X</p>
                <div className="backColor"/>
                <nav className="nav1">
                    <ul className="rowMenu">
                        {
                            ['menu1', 'menu2', 'menu3'].map((menu) => {
                                return(
                                    <li onClick={itemClose}>{menu}</li>
                                )
                            })
                        }
                    </ul>
                    <ul className="columnMenu">
                        {
                            ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'].map(item => {
                                return(
                                    <li onClick={itemOpen}>{item}</li>
                                )
                            })
                        }
                    </ul>
                </nav>
                <nav className="nav2">
                    <ul className="nav2Menu">
                        {
                            ['item1-1', 'item1-2', 'item1-3', 'item1-4', 'item1-5'].map(item1 => {
                                return(
                                    <li>{item1}</li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
        </>
    )
}