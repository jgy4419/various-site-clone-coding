import styled from 'styled-components';

export const MenListContain = styled.div`
    width: 75vw;
    background-color: #fff;
`

export const Menus = styled.ul`
    height: 100%;
`
export const MenuInner = styled.div`
    display: inline;
`

export const Menu = styled.li`
    margin-top: 10px;
    justify-content: space-between;
    display: flex;
    padding: 10px;
    box-sizing: content-box;
    border-bottom: 1px solid grey;
    line-height: 1.5rem;
`

export const MenuTitle = styled.div`
    color: #333;
    font-weight: 700;
`

export const MenuContent = styled.p`
    color: grey;
`

export const MenuPrice = styled.p`
    color: #333;
`

export const MenuImage = styled.img`
    width: 100px;
    height: 100px;
`