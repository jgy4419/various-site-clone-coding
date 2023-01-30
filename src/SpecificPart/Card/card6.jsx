import React from 'react';
import './card6.scss'

const Card6 = () => {
    return (
        <div className="card6_container">
            <div className="box">
                <div className="imgBox">
                    <img
                        src="https://blog.kakaocdn.net/dn/bj4oa7/btqLJWFLMgd/wu4GV8PKbXdICuyW0me0zk/img.jpg"
                        alt="card6-image"
                    />
                </div>
                <div className="content">
                    <h2>
                        Name: JGY <br />
                        <span>FrontEnd-Developer</span>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Card6;