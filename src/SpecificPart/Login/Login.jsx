import React from 'react';
import './Login.scss';
import Input1 from './input1';
import Login2 from './Login2';

const Login = () => {
    return (
        <>
            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <div className="user-box">
                        <input type="text" name="" required="" />
                        <label>Username</label>
                    </div>
                    <div className="user-box">
                        <input type="password" name="" required="" />
                        <label>Password</label>
                    </div>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </a>
                </form>
            </div>
            <Input1 />
            <Login2/>
        </>
    );
};
// 비밀번호 유효성 체크 UI : https://www.youtube.com/watch?v=Hi8DVOaZ0Ug


export default Login;