import React from 'react';
import * as S from './style/OrderList';

const OrderList = () => {
    const testData = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    return (
        <S.OrderListContain>
            <div className="orderBox">
                <S.OrderDelete>
                    <p>주문표</p>
                    <button className="clear">비우기</button>
                </S.OrderDelete>
                <ul className="orderList">
                    {
                        testData.map((item, index) => (
                            <li key={index} className="orderItem">
                                <p>{item}</p>
                                <S.EditBox>
                                    <S.EditBox>
                                        <button className="itemClose">X</button>
                                        <p className="price">10,000원</p>
                                    </S.EditBox>
                                    <S.EditBox>
                                        <button className="countMinus">-</button>
                                        <p className="count">{index + 1}</p>
                                        <button className="countPlus">+</button>
                                    </S.EditBox>
                                </S.EditBox>
                            </li>
                        ))
                    }
                </ul>
                <p className="priceRes">합계: {}</p>
                <button className="orderEnd">주문하기</button>
            </div>      
        </S.OrderListContain>
    );
};

export default OrderList;