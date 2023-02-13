import React from 'react';

const Card = ({item}) => {
    return (
        <div>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
        </div>
    );
};

export default Card;



