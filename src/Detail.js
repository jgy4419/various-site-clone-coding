import React, {useState} from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';


function Detail(props){
    let state = useSelector((state) => state);
    let dispatch = useDispatch();
    function plus(){
        dispatch({type: '수량증가'})
    }
    return (
        <div>
            <h1>{state[0].name}</h1>
            <h1>{state[0].quan}</h1> 
            <button onClick={()=>{
                plus()
            }}>+</button>
        </div>
    )
}

export default Detail;