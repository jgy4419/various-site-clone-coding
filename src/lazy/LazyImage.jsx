// Item 안의 이미지를 그릴 컴포넌트.

import React from 'react';
import LazyWrapper from './LazyWrapper';

const LazyImage = () => {
    return (
        <>
            <LazyWrapper>
                {({ value, onChange }) => {
                    return (
                        <div className="input-container">
                            <label htmlFor="1">Name</label>
                            <input type="text" id="1" value={value} onChange={ onChange } />
                        </div>
                    )
                }}
            </LazyWrapper>
        </>
    );
};

export default LazyImage;