// 각각의 Item 컴포넌트
import React, {Suspense, lazy} from 'react';

const LazyImage = lazy(() => import('./LazyImage'));

const LazyItem = ({src, name}) => {
    return (
        <div>
            <Suspense fallback={<div>...loading</div>}>
                <LazyImage src={src} name={name}/>
            </Suspense>
            {name}
        </div>
    );
};

export default LazyItem;