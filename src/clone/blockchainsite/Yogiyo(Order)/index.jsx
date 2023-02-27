import React from 'react';
import MenuList from './components/MenuList';
import OrderList from './components/OrderList';
import StoreInformation from './components/StoreInformation';

import * as S from './components/style/index';

const YoguyoOrderIndex = () => {
    return (
        <S.YogiyoContainer>
            <S.StoreInformation>
                <StoreInformation/>
            </S.StoreInformation>
            <S.MenuList>
                <MenuList/>
            </S.MenuList>
            <S.OrderList>
                <OrderList/>
            </S.OrderList>
        </S.YogiyoContainer>
    );
};

export default YoguyoOrderIndex;