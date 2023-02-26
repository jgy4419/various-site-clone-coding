import React, {useState} from 'react';
import './card9.scss';

const Card9 = () => {
    const backcolors = [
        "orange",
        "red",
        "green",
        "blue",
        "purple",
        "pink"
    ];
    const [cards] = useState([
        {
            id: 1,
            title: 'Card 1',
            description: 'Lorem ipsum dolor sit amet.'
        },
        {
            id: 2,
            title: 'Card 2',
            description: 'Lorem ipsum dolor sit amet.'
        },
        {
            id: 3,
            title: 'Card 3',
            description: 'Lorem ipsum dolor sit amet.'
        },
        {
            id: 4,
            title: 'Card 4',
            description: 'Lorem ipsum dolor sit amet.'
        },
        {
            id: 5,
            title: 'Card 5',
            description: 'Lorem ipsum dolor sit amet.'
        },
        {
            id: 6,
            title: 'Card 6',
            description: 'Lorem ipsum dolor sit amet.'
        }
    ])
    return (
        <div className="card9_contain">
            <ul className="card9s">
                {
                    cards.map((card, index) => (
                        <li className="card9" key={index}>
                            <div className="back_color"
                                style={{background: backcolors[index]}}
                            />
                            <h2 className="title">{card.title}</h2>
                            <p className="content">{card.description}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Card9;