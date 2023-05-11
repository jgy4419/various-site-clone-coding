import { handleActions } from 'redux-actions';

// 2. api 함수 실행.
async function getAPI(postId) {
    let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    });
    // 2-2. 결과를 반환.
    return data.json();
}

const initialState = {
    pending: false,
    error: false,
    data: {
        title: '',
        body: ''
    }
}

// action type 정의
const GET_POST_PEDING = "GET_POST_PENDING";
const GET_POST_SUCCESS = "GET_POST_SUCCESS";
const GET_POST_FAIL = "GET_POST_FAIL";

// 1-1. count 값이 들어오면
// redux thunk를 사용하면 일반 함수에 action을 줄 수 있다.
export const getPost = (postId) => async (dispatch) => {
    dispatch({ type: GET_POST_PEDING });
    try {
        // 1-2. api 호출
        const res = await getAPI(postId);
        // 3-1. api가 성공적으로 값을 반환했을 때 try 내부 실행. 
        // 성공하면 GET_POST_SUCCESS action에 api 결과값을 payload 해주기.
        dispatch({
            type: GET_POST_SUCCESS,
            payload: res
        });
        // 3-1. api가 값 반환을 실패했을 때 catch 내부 실행.
        // 실패하면 GET_POST_FAIL action에 err 값을 payload 시켜주기.
    } catch (err) {
        dispatch({
            type: GET_POST_FAIL,
            payload: err
        });
        throw (err);
    }
}


export default handleActions({
    // api를 불러오는 중에 실행될 로직(Pending)
    [GET_POST_PEDING]: (state) => {
        return {
            // 기존에 있는 state 값들 가져오기.
            ...state,
            pending: false,
            error: false
        }
    },
    [GET_POST_SUCCESS]: (state, action) => {
        // 4-1. 성공 시 payload(api 결과 값) 값의 title이랑 body 값 가져오기
        const { title, body } = action.payload;    
        
        return {
            ...state,
            pending: false, 
            // 4-2. state의 title이랑, body값을 변경시켜주기.
            data: {
                title,
                body
            }
        }
    },
    [GET_POST_FAIL]: (state) => {
        return {
            ...state,
            pending: false, 
            error: true
        }
    }
}, initialState);