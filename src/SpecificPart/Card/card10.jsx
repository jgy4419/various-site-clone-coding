import React from 'react';
import './card10.scss';
import Img from '../../img/testShoseimg1.png';

const Card10 = () => {
    return (
        <div className='card10_contain'>
            <div className="card10_inner">
                <div className="blurBack"/>
                <div className="content">
                    <img className="card_image" src={Img} alt="img" />
                    <h3 className="card_title">나이키 신발 카드</h3>
                    <p className="card_subTitle">사람들이 가장 많이 신고 다니는 신발이에요.</p>
                    <div className="sns_contain">
                        <p>페북</p>
                        <p>인스타</p>
                        <p>깃허브</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Card10;