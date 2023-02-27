import styled from 'styled-components';

export const YogiyoContainer = styled.div`
    position: relative;
    margin: auto;
    display: grid;
    grid-template-areas: 
        "storeInformation orderList"
        "menuList orderList";
    ;
    grid-gap: 20px;
    width: 100vw;
    height: 100vh;
`;

export const StoreInformation = styled.div`
    grid-area: storeInformation;
`

export const MenuList = styled.div`
    grid-area: menuList;
`;

export const OrderList = styled.div`
    grid-area: orderList;
`;