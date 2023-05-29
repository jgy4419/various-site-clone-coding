import './skeleton2.scss';

import React from 'react';

const Skeleton2 = () => {
    return (
        <div className="skeleton2">
            <div className="skeleton2_card">
                <div className="skeleton2_header">
                    <div className="skeleton2_img"></div>
                    <div className="skeleton2_detail">
                        <span className="skeleton2_name"></span>
                        <span className="skeleton2_about"></span>
                    </div>
                </div>
                <div className="skeleton2_description">
                    <div className="skeleton2_line line1"></div>
                    <div className="skeleton2_line line2"></div>
                    <div className="skeleton2_line line3"></div>
                </div>
                <div className="skeleton2_btns">
                    <div className="skeleton2_btn btn-1"></div>
                    <div className="skeleton2_btn btn-2"></div>
                </div>
            </div>
        </div>
    );
};

export default Skeleton2;