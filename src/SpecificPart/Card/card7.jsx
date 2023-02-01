import React from 'react';
import './card7.scss';

const Card7 = () => {
    const title = ['타이틀1', '타이틀2', '타이틀3', '타이틀4', '타이틀5'];
    const content = ['내---용1', '내---용2', '내---용3', '내---용4', '내---용5'];
    const color = ['#D9ACF5', '#645CBB', '#BFACE2', '#EBC7E6', '#A084DC'];
    return (
        <div className='card7_contain'>
        {
            title.map((item, index) => {
                return (
                    <div className="cards" key={index}
                        style={{
                            backgroundColor: `${color[index]}`
                        }}
                    >
                        <h3 className="card_title">{item}</h3>
                        <p className="card_content">{content[item]}</p>
                    </div>
                )
            })
        }
    </div>
    );
};

export default Card7;