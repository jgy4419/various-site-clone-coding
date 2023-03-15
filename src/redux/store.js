import { combineReducers } from 'redux';
// 모듈 가져오기
import counter from './modules/counter';
import post from './modules/post';

// 가져온 모듈 넣어주기
const rootReducer = combineReducers({
    counter,
    post
});

export default rootReducer