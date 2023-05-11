import {createAction, handleActions} from 'redux-actions';

/* 
    1. reducer는 export default로 내보내기
    2. action 함수는 export로 내보내기
    3. 액션 타입을 정의할 때 프로젝트명/모듈이름/타입이름 형태로 적어주기. (중첩 방지)
*/

const initialState = {
    num: 0
}

export const PLUS = "counterProject/counter/PLUS";
export const MINUS = "counterProject/counter/MINUS";

// redux-actions 사용 전
// 컴포넌트에서 사용할 떈 실제로 이렇게 타입을 반환하는 함수 사용해주면 된다.
// export function addData() {
//     return {type: PLUS};
// }

// export default function reducer(state = initialState, action) {
//     switch(action.type) {
//         case PLUS:
//             return {
//                 num: state.num + 1
//             }
//         default: 
//             return state;
//     }
// }

// redux-actions 사용
export const increment = createAction(PLUS); // action 지정은 함수처럼 사용하지 않아도 된다.
export const decrement = createAction(MINUS);

// redux-thunk 사용
// 일반 함수처럼 인자를 받아서
export const incrementAsync = (test) => dispatch => {
    console.log(test);
    setTimeout(() => {
        // action 함수에 action.payload 형식의 객체를 넣어주면 된다.
        dispatch(increment({asyncTest: test}));
    }, 1000);
}

export const decrementAsync = () => dispatch => {
    setTimeout(() => {
        dispatch(decrement());
    }, 2000);
}

// reducer도 이렇게 객체 형식으로 가독성 좋게 사용할 수 잇다.
export const reducer = handleActions({
    [PLUS]: (state, action) => {
        const {testData, asyncTest} = action.payload;
        if(testData === 3) {
            return {
                num: state.num += 1
            }
        }else if(asyncTest === 100) {
            return {
                num: state.num *= 2
            }
        }
        console.log(testData, asyncTest);
        return {
            ...state,
            num: state.num + 1
        }
    },
    [MINUS]: (state, action) => ({num: state.num - 1})
}, initialState);

export default reducer;
