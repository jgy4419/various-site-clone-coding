import React, { Suspense, useState } from 'react';

const Test = React.lazy(() => import('./Test'));

const Skeleton = () => {
    let [delayState, setDelayState] = useState(0);
    return (
        <div style={styles.contain}>
            <button onClick={() => { setDelayState(1) }}>State 변경</button>
            <Suspense fallback={ <h1>Loading... </h1>}>
                <Test delayState={delayState} /> 
            </Suspense>
        </div>
    );
};

export default Skeleton;

const styles = {
    contain: {
        width: '100vw',
        height: '100vh',
        backgroundColor: 'lightgrey'
    },
}