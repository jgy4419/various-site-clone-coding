import React from 'react';

const Button2 = () => {
    return (
        <>
            <ul>
            {
                ['1', '2', '3', '4'].map((arr, index) => {
                    return (
                        <li className="item" key={index}/>
                    )
                })
            } 
            </ul>
            <style jsx>{`
                ul{
                    display: flex;
                }
                .item{
                    width: 100px;
                    height: 100px;
                    background-color: blue;
                    margin-left: 10px;
                    transition: .3s;
                    cursor: pointer;
                    border-radius: 10px;
                }
                ul:hover > :not(:hover) {
                    opacity: .4;
                }
            `}</style>
        </>
    );
};

export default Button2;