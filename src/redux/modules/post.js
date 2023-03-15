import { handleActions } from 'redux-actions';

// 2.
async function getAPI(postId) {
    let data = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    });
    return await data.json();
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

// 1.
export const getPost = (postId) => async (dispatch) => {
    dispatch({ type: GET_POST_PEDING });
    try {
        const res = await getAPI(postId);
        dispatch({
            type: GET_POST_SUCCESS,
            payload: res
        });
    } catch (err) {
        dispatch({
            type: GET_POST_FAIL,
            payload: err
        });
        throw (err);
    }
}


export default handleActions({
    [GET_POST_PEDING]: (state, action) => {
        return {
            // 기존에 있는 state 값들 가져오기.
            ...state,
            pending: false,
            error: false
        }
    },
    [GET_POST_SUCCESS]: (state, action) => {
        console.log(action);
        const { title, body } = action.payload;    
        
        return {
            ...state,
            pending: false, 
            data: {
                title,
                body
            }
        }
    },
    [GET_POST_FAIL]: (state, action) => {
        return {
            ...state,
            pending: false, 
            error: true
        }
    }
}, initialState);