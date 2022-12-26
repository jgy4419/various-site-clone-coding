import React from 'react';
import './card4.scss';

const Card4 = () => {
    return (
        <div className="card">
            <div className="circle"></div>
            <div className="content">
                <div className="text">
                    <h2>Pepsi</h2>
                    <h3>Zero Sugar</h3>
                    <p>
                        Peppsi Zero Sugar is the only soda with zero calories and 
                        maximum pepsi taste!
                    </p>
                    <div className="buy_button">Buy Now</div>
                </div>
                <img src = "https://www.pepsi.com/en-us/uploads/images/can-pzs.png" alt="펩시콜라"/>
            </div>
        </div>
    );
};

export default Card4;