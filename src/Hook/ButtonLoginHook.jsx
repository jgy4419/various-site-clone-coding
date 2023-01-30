import React, { useState } from 'react';

const ButtonLoginHook = () => {
    const [loginState, setLoginState] = useState();
    function loginFunc() {
        setLoginState(!loginState);
    }
    function loginAlert() {
        if (!loginState) {
            alert('로그인 후 진행해주세요.');
        } else {
            alert('로그인이 되셨군요 ㅎㅎ');
        }
    }
    return {loginState, loginFunc, loginAlert}
};

export default ButtonLoginHook;