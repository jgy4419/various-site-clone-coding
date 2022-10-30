import React from 'react';
import './slide2.scss';

const Slide2 = () => {
    return (
        <div className="slide2Contain">
            <div className="conteudo">
                <article className="card">
                    <h1>HTML</h1>
                    <span>페이지 뼈대를 생성해주는 언어</span>
                </article>
                <article className="card">
                    <h1>CSS</h1>
                    <span>스타일 적용해주는 언어</span>
                </article>
                <article className="card">
                    <h1>JavaScript</h1>
                    <span>페이지를 동적으로 만들어주는 언어</span>
                </article>
                <article className="card">
                    <h1>React</h1>
                    <span>가장 인기있는 JS 라이브러리</span>
                </article>
                <article className="card">
                    <h1>Vue</h1>
                    <span>내가 제일 많이 쓰는 프레임워크..</span>
                </article>
            </div>
        </div>
    );
};

export default Slide2;