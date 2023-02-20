import React, { useState } from 'react';
import './card8.scss';

const Card8 = () => {
    const [title] = useState(['Twitter', 'Instagram', 'FaceBook', 'YouTube']);
    const [content] = useState([
        'Lorem ipsum dolor sit amet, consectetur adipiscing alit1. Lorem ipsum dolor sit amet, consectetur adipiscing alit1.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing alit2. Lorem ipsum dolor sit amet, consectetur adipiscing alit2.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing alit3. Lorem ipsum dolor sit amet, consectetur adipiscing alit3.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing alit4. Lorem ipsum dolor sit amet, consectetur adipiscing alit4.',
    ])
    return (
        <>
            <div className="card8_contain">
                <div className="inner_contain">
                    {
                        title.map((item, index) => (
                            <div className="item_contain">
                                <h1 className="big_title">{item}</h1>
                                <h3 className="small_title">{item}</h3>
                                <p className="content">{content[index]} {content[index]}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Card8;