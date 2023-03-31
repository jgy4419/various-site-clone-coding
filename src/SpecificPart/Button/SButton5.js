import styled from 'styled-components';

export const Item = styled.p`
    position: absolute;
    list-style: none;
    transition: transform 0.5s;
    transition-delay: var(--d);
`
export const Btn = styled.div`
    position: absolute;
    border: 0;
    cursor: pointer;
    z-index: 10;
    display: inline-flex;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: #fff;
    color: #151515;
    border-radius: 50%;
`
export const Main = styled.button`
    position: absolute;
    z-index: 100;
    &:hover {
        background-color: #333;
        & > ${Btn}{
            &:nth-child(1) {
                transform: translateX(-65px);
            }
            &:nth-child(2) {
                transform: translateY(-65px);
            }
            &:nth-child(3) {
                transform: translateX(65px);
            }
        }
    }
`
export const Wrapper = styled.div`
    position: relative;
    display: inline-flex;
    justify-content: center;
    width: 50px;
    height: 50px;
    background-color: #fff;
    color: #151515;
    border-radius: 50%;
    // &:active {
    //     & > ${Item}{
    //         &:nth-child(1) {
    //             transform: translateX(-65px);
    //         }
    //         &:nth-child(2) {
    //             transform: translateY(-65px);
    //         }
    //         &:nth-child(3) {
    //             transform: translateX(65px);
    //         }
    //     }
    // }
`