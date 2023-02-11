// ort React from 'react';
import { useEffect, useState } from 'react'
import './card2.scss'
export default function Card2({setWelcomeState}) {
    const [scrollState, setScrollState] = useState(false);
    const [timerState, setTimerState] = useState(false);
    useEffect(() => {
        // if (스크롤감지가 되면) setScrollState(true);
        // setTimeout(() => {
            // document.querySelector('.card2Contain').classList.add('none');
            // setScrollState(true);
        // }, 3000);
    }, []);
    return(
        <>
            <div className="card2Contain">
                <ul className="cards">
                    {
                        [
                            'https://t1.daumcdn.net/cfile/tistory/196889394E3E84880D',
                            'https://t1.daumcdn.net/cfile/tistory/146F1D224B4098E981',
                            'https://t1.daumcdn.net/cfile/tistory/1565F3484E3E85F608',
                            'https://t1.daumcdn.net/cfile/tistory/111F0C3F4E15A4AC07'
                        ].map(img => {
                            return(
                                <li className='card' style={{backgroundImage: `url(${img})`}}></li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}