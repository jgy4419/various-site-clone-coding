import React from 'react'
import Image from '../../../../img/testShoseimg1.png'
import * as S from './style/storeIndormation';

const StoreInformation = () => {
    return (
        <>
            <S.StoreContain>
                <S.StoreInner>
                    <S.Title>버거킹 - 대한민국 어딘가</S.Title>
                    <hr/>
                    <S.InformationContain>
                        <S.StoreImage src={Image} alt="음식이미지"/>
                        <S.Information>
                            <S.ItemKey>최소 주문금액 <S.ItemValue>17,000원</S.ItemValue></S.ItemKey>
                            <S.ItemKey>결제 <S.ItemValue>신용카드, 현금</S.ItemValue></S.ItemKey>
                            <S.ItemKey>배달시간 <S.ItemValue>55분~60분</S.ItemValue></S.ItemKey>
                        </S.Information>
                    </S.InformationContain>
                </S.StoreInner>
            </S.StoreContain>   
        </>
    );
};

export default StoreInformation;

