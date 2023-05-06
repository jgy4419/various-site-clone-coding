import React from 'react';
import Image1 from '../../img/testShoseimg1.png'
import Image2 from '../../img/testShoseImg2.png'
import Image3 from '../../img/testShoseImg3.png'
import './card12.scss';

const Card12 = () => {
    return (
        <div className='card12_container'>
            <div className="card12_inner">
            {
                [Image1, Image2, Image3].map((img, index) => {
                    return (
                        <img key={index} src={img} alt='이미지'/>
                    )
                })
            }
            </div>
        </div>
    );
};

export default Card12;