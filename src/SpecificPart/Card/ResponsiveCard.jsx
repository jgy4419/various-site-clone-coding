import React from 'react';
import './ResponsiveCard.scss';

const ResponsiveCard = () => {
    return (
        <div className="responsiveCard_contain">
            <article className="blog-post">
                <div className="blog-post__img">
                    <img src="https://resources.matcha-jp.com/resize/720x2000/2016/12/27-12664.webp" alt="" />
                </div>
                <div className="blog-post__info">
                    <div className="blog-post__date">
                        <span>ThusDay</span>
                        <span>2/14/2023</span>
                    </div>
                    <h2 className="blog-post__title">
                        오늘은 스터디 가는 날
                    </h2>
                    <p>
                        다양한 사람들과 스터디 하면서 기술 역량, 면접 준비를 하면서 알찬 하루를 보낸 뒤,
                        맛있는 저녁을 먹을 예정입니다.
                    </p>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" className="blog-post__cta">더 읽기</a>
                </div>
            </article>
        </div>
    );
};


export default ResponsiveCard;