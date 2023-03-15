import { createAction, handleActions } from 'redux-actions';

export const PLUS = "project/counter/PLUS";
export const MINUS = "project/counter/MINUS";


// redux-actions 사용해보기
export const addData = createAction(PLUS);
export const minusData = createAction(MINUS);

const initialState = {
    num: 1
};

export const addAsync = () => dispatch => {
        // action을 만들지 않았을 땐 type으로 바로 입력해도 된다. handleActions에서 로직을 설정해주었기 때문에!
        dispatch({type: PLUS});
}

export const reducer = handleActions({
    [PLUS]: (state, action) => ({num: state.num + 1}),
    [MINUS]: (state, action) => ({num: state.num - 1})
}, initialState);

export default reducer;

// export function addData() {
//     return { type: PLUS };
// }

// export function minusData() {
//     return {type: MINUS};
// }

// const initialState = {
//     num: 0
// }

// export default function reducer(state = initialState, action){ 
//     switch(action.type) {
//         case PLUS:
//             return {
//                 num: state.num + 1
//             }
//         case MINUS:
//             return {
//                 num: state.num - 1
//             }
//         default: 
//             return state;
//     }
// }