import React, { useState, useEffect, useCallback } from 'react';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
// import { useHistory } from 'react-route';
import './UnmountText.scss';
export default function UmnountText(){
    const history = useHistory();
    const [mount, setMount] = useState(false);
    const [effect, setEffect] = useState('mount1');
    const [urlState, setUrlState] = useState(false);

    const styles = {
        contain: {
            width: "100vw",
            height: "100vh",
            transition: '.6s'
        }
    }
    
    const onClickBtn = () => {
        // 만약 mount가 true이면 effect값을(클래스명) unmount로 변경 하고 0.4초 뒤에 mount를 false로 변경
        if(mount) {
            setEffect('unmount');
            setTimeout(() => {
                setMount(v => !v);
            }, 400)
        }else {
            // 만약 mount가 false이면 effect값을(클래스명) mount1로 변경 하고 mount를 true로 변경
            setEffect('mount1');
            setMount(v => !v);
        }
    }
    function changeRoute(){
        setUrlState(true);
        setTimeout(() => {
            history.push({
                pathname: '/'
            });
        }, 700);
    }
    useEffect(() => {

    }, [])
    return(
        <>
            <div className="container" style={{...styles.contain, opacity: urlState === true ? 0 : 1}}>
                <ul>
                    <li onClick={changeRoute}>메뉴1</li>
                    <li>메뉴2</li>
                </ul>
                <div className="container_wrap">
                    <button onClick={onClickBtn}>Mount</button>
                    {
                        mount ?
                        <div className={`box-wrap ${effect}`}>
                            <h2>풍부하게 가진 청춘을 구하지 사람은 보내는 것이다.</h2><br/>
                            <p>위하여서 생명을 관현악이며, 무엇을 그들은 대한 보는 가는 것은 때문이다. 인류의 청춘 더운지라 평화스러운 얼음에 자신과 현저하게 것이다. 하는 창공에 할지니, 작고 주며, 피가 것이다. 이상은 할지라도 길지 역사를 위하여, 이성은 봄바람이다. 그들은 끓는 위하여서, 주는 이것을 목숨이 인도하겠다는 철환하였는가? 이성은 우는 위하여 귀는 물방아 피다. 길지 들어 남는 방황하였으며, 수 것은 평화스러운 청춘의 것이다. 커다란 생생하며, 하였으며, 없으면 약동하다. 모래뿐일 수 앞이 끓는 피가 듣기만 보라. 찾아 가치를 남는 피고 오직 것이다. 그것을 이것이야말로 앞이 심장은 하는 새가 봄날의 때문이다.</p>
                        </div>
                        :
                        <p className="textAnimation">unmount!</p>
                    }
                </div>
            </div>
        </>
    )
}