import React, {useEffect, useState} from 'react';
import * as S from './style/MenuList';
import useApi from './apis/useApi';
import Image from '../../../../img/testImg.png'

const MenuList = () => {
    const { data } = useApi();
    const [usingData, setUsingData] =  useState([]);
    useEffect(() => {
        setUsingData([...usingData, ...data.slice(0, 10)])
    }, [data]);
    return (
        <S.MenListContain>
            <S.Menus>
            {
                usingData.map((item, index) => (
                    <S.Menu key={index}>
                        <S.MenuInner>
                            <S.MenuTitle>{item.title.slice(0, 10)}</S.MenuTitle>
                            <S.MenuContent>{item.title}</S.MenuContent>
                            <S.MenuPrice>{Math.floor( ( Math.random() * 100000 ) ).toLocaleString() }원</S.MenuPrice>
                        </S.MenuInner>
                        <S.MenuImage src={Image} alt="음식 이미지"/>
                    </S.Menu>
                ))
            }
            </S.Menus>
        </S.MenListContain>
    );
};

export default MenuList;